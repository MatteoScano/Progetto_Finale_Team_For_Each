using System;
using System.Collections.Generic;
using System.Linq;
using FilmComments.Core.Exceptions;
using FilmComments.Core.Model;

namespace FilmComments.Core.BL.Impl
{
    public class InMemoryStorageService : IStorageService
    {
        private List<Comment> _comments;

        public InMemoryStorageService()
        {
            _comments = new();
        }

        public Comment AddComment(Comment comment)
        {
            Comment commentToAdd = new()
            {
                Id = GetNextCommentId(),
                Body = comment.Body,
                UserId = comment.UserId,
                MovieId = comment.MovieId
            };

            _comments.Add(commentToAdd);
            return commentToAdd;
        }

        public List<Comment> GetByUserId(int userId)
        {
            return _comments.Where(c => c.UserId == userId).ToList();
        }

        public void DeleteCommentById(int commentId)
        {
            Comment commentToDelete = FindCommentOrFail(commentId);
            _comments.Remove(commentToDelete);
        }

        public List<Comment> GetAllComments()
        {
            return _comments;
        }

        public Comment GetCommentById(int commentId)
        {
            return FindCommentOrFail(commentId);
        }

        public Comment UpdateCommentById(int commentId, Comment updatedComment)
        {
            Comment commentToUpdate = FindCommentOrFail(commentId);
            commentToUpdate.Body = updatedComment.Body;
            commentToUpdate.UserId = updatedComment.UserId;
            commentToUpdate.MovieId = updatedComment.MovieId;

            return commentToUpdate;
        }

        private int GetNextCommentId() => _comments.Count == 0 ? 1 : _comments.Last().Id + 1;

        private Comment FindCommentOrFail(int id)
        {
            Comment commentToSearch = _comments.FirstOrDefault(c => c.Id == id);

            if (commentToSearch == null) throw new CommentNotFoundException(id);

            return commentToSearch;
        }
    }
}
