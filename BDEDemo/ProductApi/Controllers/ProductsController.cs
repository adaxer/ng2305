using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Controllers
{
    [ApiController]
    [EnableCors]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly ILogger<ProductsController> _logger;
        static List<Product> _products;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
            _products = JsonConvert.DeserializeObject<List<Product>>(System.IO.File.ReadAllText("products.json"));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            await Task.Delay(1000);
            var product = _products.SingleOrDefault(p => p.ProductId == id);
            if (product != null)
            {
                return Ok(product);
            }
            return NotFound();
        }

        [HttpPost]
        [Authorize]
        public IActionResult New([FromBody] Product product)
        {
            product.ProductId = _products.MaxBy(p => p.ProductId).ProductId + 1;
            _products.Add(product);
            System.IO.File.WriteAllText("products.json", JsonConvert.SerializeObject(_products));
            return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);
        }
    }
}
