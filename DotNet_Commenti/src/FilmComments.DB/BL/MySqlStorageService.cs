using System;
using System.Collections.Generic;
using System.Linq;
using FilmComments.Core.BL;
using FilmComments.Core.Model;
using FilmComments.DB.Mappers;
using FilmComments.DB.Model;

namespace FilmComments.DB.BL
{
    public class MySqlStorageService : IStorageService
    {
        private DbService _dbService;
        private DbContextManager _contextManager;

        public MySqlStorageService()
        {
            _contextManager = new();
            _dbService = new(_contextManager);
        }

        public Comment AddComment(Comment comment)
        {
            CommentEntity commentEntity = _dbService.Add(CommentEntityMapper.ToCommentEntity(comment));
            return CommentEntityMapper.ToComment(commentEntity);
        }


        public void DeleteCommentById(int commentId) => _dbService.DeleteById(commentId);


        public List<Comment> GetAllComments() => _dbService
            .All()
            .Select(entity => CommentEntityMapper.ToComment(entity))
            .ToList();


        public List<Comment> GetByUserId(int userId) => _dbService
            .GetByUserId(userId)
            .Select(entity => CommentEntityMapper.ToComment(entity))
            .ToList();


        public Comment GetCommentById(int commentId) =>
            CommentEntityMapper.ToComment(_dbService.GetById(commentId));


        public Comment UpdateCommentById(int commentId, Comment updatedComment)
        {
            CommentEntity commentEntity = _dbService.UpdateById(commentId, CommentEntityMapper.ToCommentEntity(updatedComment));
            return CommentEntityMapper.ToComment(commentEntity);
        }
    }
}
