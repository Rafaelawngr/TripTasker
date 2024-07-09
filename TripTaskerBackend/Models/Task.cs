using Microsoft.VisualBasic;

namespace TripTaskerBackend.Models {
     public enum TaskProgress {
        ToDo,
        InProgress,
        Done
    }
    public class TaskItem {
        public int TaskId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public TaskProgress Status { get; set; }
        public DateTime DueDate {get; set;} 
        public int TripId { get; set; }
        public required Trip Trip { get; set; }
    }
}

