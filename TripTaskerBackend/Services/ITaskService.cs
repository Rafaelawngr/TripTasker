
using TripTaskerBackend.Models;

namespace TripTaskerBackend.Services
{
    public interface ITaskService
    {
        Task<List<TaskItem>> GetTasksAsync(int tripId);
        Task<TaskItem?> GetTaskAsync(int taskId);
        Task<TaskItem> CreateTaskAsync(int tripId, TaskItem newTask);
        Task<TaskItem?> UpdateTaskAsync(int taskId, TaskItem updatedTask);
        Task DeleteTaskAsync(int taskId);
        Task<TaskItem?> UpdateTaskStatusAsync(int taskId, TaskProgress newStatus);
    }
}


        

