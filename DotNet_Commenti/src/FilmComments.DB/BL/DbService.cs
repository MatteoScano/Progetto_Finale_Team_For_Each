using System;
using System.Collections.Generic;
using System.Linq;
using FilmComments.Core.Exceptions;
using FilmComments.DB.Model;

namespace FilmComments.DB.BL
{
    class DbService
    {
        private DbContextManager _contextManager;

        public DbService(DbContextManager contextManager)
        {
            _contextManager = contextManager;
        }

        public List<CommentEntity> All()
        {
            return _contextManager.Comments.ToList();
        }

        public CommentEntity GetById(int id)
        {
            var comment = FindCommentOrFail(id);
            return comment;
        }

        public List<CommentEntity> GetByUserId(int userId) => _contextManager
            .Comments
            .Where(c => c.UserId == userId)
            .ToList();

        public CommentEntity Add(CommentEntity comment)
        {
            _contextManager.Comments.Add(comment);
            _contextManager.SaveChanges();
            return comment;
        }

        public CommentEntity DeleteById(int id)
        {
            var comment = FindCommentOrFail(id);
            _contextManager.Comments.Remove(comment);
            _contextManager.SaveChanges();
            return comment;
        }

        public CommentEntity UpdateById(int id, CommentEntity comment)
        {
            var previousComment = FindCommentOrFail(id);

            previousComment.MovieId = comment.MovieId;
            previousComment.UserId = comment.UserId;
            previousComment.Body = comment.Body;
            _contextManager.SaveChanges();

            return previousComment;
        }

        private CommentEntity FindCommentOrFail(int id)
        {
            var comment = _contextManager.Comments.FirstOrDefault(x => x.Id == id);
            if (comment == null)
            {
                throw new CommentNotFoundException(id);
            }

            return comment;
        }
    }
}
