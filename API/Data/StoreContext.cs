using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
/// <summary>
/// Represents a database context for the store.
/// </summary>
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}