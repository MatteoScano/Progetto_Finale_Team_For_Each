using System;
using FilmComments.Core.Model;
using FilmComments.DB.Model;

namespace FilmComments.DB.Mappers
{
    public static class CommentEntityMapper
    {
        public static CommentEntity ToCommentEntity(Comment comment) => new()
        {
            Id = comment.Id,
            Body = comment.Body,
            UserId = comment.UserId,
            MovieId = comment.MovieId
        };


        public static Comment ToComment(CommentEntity commentEntity) => new()
        {
            Id = commentEntity.Id,
            Body = commentEntity.Body,
            UserId = commentEntity.UserId,
            MovieId = commentEntity.MovieId
        };
    }
}
