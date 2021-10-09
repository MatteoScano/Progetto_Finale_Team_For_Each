using System;
namespace FilmComments.Core.Exceptions
{
    public class CommentBodyTooShortException : Exception
    {
        public CommentBodyTooShortException(int minLength, int commentId) : base(BuildErrorMessage(commentId, minLength)) { }

        private static string BuildErrorMessage(int commentId, int minLength)
        {
            string commentIdPlaceholder = commentId == 0 ? "" : $"'{commentId}' ";
            return $"Comment {commentIdPlaceholder}body too short. Minimum length: {minLength} characters.";
        }
    }
}
