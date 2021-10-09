using System;
namespace FilmComments.Core.Exceptions
{
    public class CommentNotFoundException : Exception
    {
        public CommentNotFoundException(int commentId) : base($"The comment '{commentId}' has not been found.") { }
    }
}
