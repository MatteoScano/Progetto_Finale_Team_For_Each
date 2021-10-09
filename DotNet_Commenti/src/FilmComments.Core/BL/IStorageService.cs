using System;
using System.Collections.Generic;
using FilmComments.Core.Model;

namespace FilmComments.Core.BL
{
    public interface IStorageService
    {
        public List<Comment> GetAllComments();

        public Comment GetCommentById(int commentId);

        public List<Comment> GetByUserId(int userId);

        public Comment AddComment(Comment comment);

        public Comment UpdateCommentById(int commentId, Comment updatedComment);

        public void DeleteCommentById(int commentId);
    }
}
