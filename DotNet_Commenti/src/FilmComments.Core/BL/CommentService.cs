using System;
using System.Collections.Generic;
using FilmComments.Core.Exceptions;
using FilmComments.Core.Model;

namespace FilmComments.Core.BL
{
    public class CommentService
    {
        private const int MIN_COMMENT_LENGTH = 20;
        private IStorageService _storageService;

        public CommentService(IStorageService storageService)
        {
            _storageService = storageService;
        }

        public Comment AddComment(Comment comment)
        {
            ValidateCommentOrFail(comment);
            return _storageService.AddComment(comment);
        }

        public List<Comment> GetAllComments() => _storageService.GetAllComments();

        public List<Comment> GetAllCommentsByUserId(int userId) => _storageService.GetByUserId(userId);

        public Comment GetCommentById(int commentId) => _storageService.GetCommentById(commentId);

        public Comment UpdateCommentById(int commentId, Comment updatedComment)
        {
            ValidateCommentOrFail(updatedComment, commentId);

            return _storageService.UpdateCommentById(commentId, updatedComment);
        }

        public void DeleteCommentById(int commentId) => _storageService.DeleteCommentById(commentId);


        private static void ValidateCommentOrFail(Comment comment) => RunCommentValidationsOrFail(comment);

        private static void ValidateCommentOrFail(Comment comment, int commentId) => RunCommentValidationsOrFail(comment, commentId);

        private static void RunCommentValidationsOrFail(Comment comment, int commentId = 0)
        {
            if (comment.Body.Length < MIN_COMMENT_LENGTH)
            {
                throw new CommentBodyTooShortException(minLength: MIN_COMMENT_LENGTH, commentId: commentId);
            }

            if (!ValidateCommentUserId(comment.UserId))
            {
                throw new CommentNotRelatedToUserException(commentId);
            }

            if (!ValidateCommentMovieId(comment.MovieId))
            {
                throw new CommentNotRelatedToMovieException(commentId);
            }
        }

        private static bool ValidateCommentUserId(int userId) => userId > 0;

        private static bool ValidateCommentMovieId(int movieId) => movieId > 0;

    }
}
