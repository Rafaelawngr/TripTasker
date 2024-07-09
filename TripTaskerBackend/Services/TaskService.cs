using Microsoft.EntityFrameworkCore;
using TripTaskerBackend.Data;
using TripTaskerBackend.Models;

namespace TripTaskerBackend.Services
{
    public class TaskService : ITaskService
    {
        private readonly ApplicationDbContext _context;

        public TaskService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<TaskItem>> GetTasksAsync(int tripId)
        {
            return await _context.TaskItems.Where(t => t.TripId == tripId).ToListAsync();
        }

        public async Task<TaskItem?> GetTaskAsync(int taskId) 
        {
            return await _context.TaskItems.FirstOrDefaultAsync(t => t.TaskId == taskId);
        }

        public async Task<TaskItem?> UpdateTaskAsync(int taskId, TaskItem updatedTask) 
        {
            var task = await _context.TaskItems.FindAsync(taskId);
            if (task == null)
            {
                 return null;
            }

        task.Title = updatedTask.Title;
        task.Description = updatedTask.Description;
        task.Status = updatedTask.Status;
         task.DueDate = updatedTask.DueDate;

    await _context.SaveChangesAsync();
    return task;
}

public async Task<TaskItem?> UpdateTaskStatusAsync(int taskId, TaskProgress newStatus)
{
    var task = await _context.TaskItems.FindAsync(taskId);
    if (task != null)
    {
        task.Status = newStatus;
        await _context.SaveChangesAsync();
    }
    return task;
}

        public async Task<TaskItem> CreateTaskAsync(int tripId, TaskItem newTask)
        {
            newTask.TripId = tripId;
            _context.TaskItems.Add(newTask);
            await _context.SaveChangesAsync();
            return newTask;
        }

        public async Task DeleteTaskAsync(int taskId)
        {
            var task = await _context.TaskItems.FindAsync(taskId);
            if (task != null)
            {
                _context.TaskItems.Remove(task);
                await _context.SaveChangesAsync();
            }
        }
    }
}