using System;
namespace FilmComments.Core.Exceptions
{
    public class CommentNotRelatedToUserException : Exception
    {
        public CommentNotRelatedToUserException(int commentId) : base(BuildErrorMessage(commentId)) { }

        private static string BuildErrorMessage(int commentId)
        {
            string commentIdPlaceholder = commentId == 0 ? "" : $"{commentId} ";
            return $"The comment {commentIdPlaceholder}must be related to some user.";
        }
    }
}
