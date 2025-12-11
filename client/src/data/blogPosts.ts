export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "best-native-plants-western-melbourne",
    title: "Top 5 Native Plants for Western Melbourne Gardens",
    excerpt: "Discover the hardiest and most beautiful native plants that thrive in the clay soils and variable climate of Melbourne's Western Suburbs.",
    date: "October 15, 2023",
    author: "Westside Scapes Team",
    image: "images/service-garden-beds.jpg",
    category: "Planting",
    content: `
      <p>Gardening in Western Melbourne comes with its unique set of challenges. The heavy clay soils and lower rainfall compared to the east mean that choosing the right plants is crucial for a thriving, low-maintenance garden. Here are our top 5 native picks that love the West.</p>

      <h3>1. Correa glabra (Rock Correa)</h3>
      <p>This tough shrub is a superstar in Western suburbs gardens. It tolerates clay soils, frost, and drought once established. Its bell-shaped flowers appear in winter, providing color when most other plants are dormant. It makes an excellent low hedge or screening plant.</p>

      <h3>2. Lomandra longifolia (Spiny-headed Mat-rush)</h3>
      <p>You'll see these everywhere for a reason—they are nearly indestructible. Perfect for bordering paths or filling gaps in garden beds, Lomandra provides a soft, weeping effect without the maintenance of a lawn. 'Tanika' is a popular fine-leaf variety that looks sophisticated in modern landscapes.</p>

      <h3>3. Westringia fruticosa (Coastal Rosemary)</h3>
      <p>While it loves the coast, Westringia is incredibly adaptable to the clay soils of Deer Park and Caroline Springs. It responds well to pruning, making it perfect for formal shapes or loose, natural hedging. The grey-green foliage contrasts beautifully with darker plants.</p>

      <h3>4. Callistemon (Bottlebrush)</h3>
      <p>Bottlebrushes are fantastic for attracting native birds to your garden. Varieties like 'Little John' stay compact and produce stunning red flowers. They love the sun and can handle the wet feet that often occur in clay soils during winter.</p>

      <h3>5. Acacia cognata (River Wattle)</h3>
      <p>For a soft, weeping effect, it's hard to beat the River Wattle. Dwarf varieties like 'Limelight' offer vibrant lime-green foliage that brightens up any garden corner. They prefer a slightly better-drained spot, so consider mounding the soil slightly when planting.</p>

      <h3>Conclusion</h3>
      <p>By selecting plants that are naturally adapted to our local conditions, you save water, time, and money. At Westside Scapes, we specialize in creating planting plans that suit your specific soil and aspect. Contact us today to discuss your garden refresh!</p>
    `
  },
  {
    id: "preparing-lawn-summer",
    title: "How to Prepare Your Lawn for a Scorchingly Hot Summer",
    excerpt: "Summer in Melbourne can be brutal on your grass. Follow these essential steps to ensure your lawn stays green and healthy through the heat.",
    date: "November 2, 2023",
    author: "Westside Scapes Team",
    image: "images/service-turf.jpg",
    category: "Lawn Care",
    content: `
      <p>As the temperature rises, your lawn is the first thing to show stress. Melbourne's dry heat can turn a lush green carpet into a brown dustbowl in a matter of weeks. However, with a bit of preparation, your turf can survive and thrive.</p>

      <h3>1. Deep Watering Over Frequent Sprinkling</h3>
      <p>The biggest mistake homeowners make is watering little and often. This encourages shallow roots that dry out quickly. Instead, water deeply once or twice a week. This trains the roots to go down deep into the soil where it stays cooler and moister.</p>

      <h3>2. Raise Your Mower Height</h3>
      <p>Scalping your lawn is a death sentence in summer. Longer grass blades shade the soil, reducing evaporation and protecting the roots. Raise your mower deck to leave about 40-50mm of leaf on the grass.</p>

      <h3>3. Apply a Wetting Agent</h3>
      <p>Western Melbourne soils can become hydrophobic (water-repellent) when dry. If you notice water pooling on the surface rather than soaking in, apply a quality soil wetter. This helps water penetrate evenly to the root zone.</p>

      <h3>4. Fertilize at the Right Time</h3>
      <p>Avoid heavy nitrogen fertilizers in the peak of heat, as they encourage rapid growth that requires more water. Instead, use a slow-release fertilizer or a seaweed tonic early in the season to strengthen the cell walls of the grass.</p>

      <h3>Considering a Change?</h3>
      <p>If you're tired of the constant battle to keep your lawn alive, it might be time to consider drought-tolerant varieties like TifTuf Bermuda or even high-quality artificial turf. We can help you decide the best option for your lifestyle.</p>
    `
  },
  {
    id: "paving-vs-decking",
    title: "Paving vs. Decking: Which is Right for Your Backyard?",
    excerpt: "Debating between a timber deck or a paved patio? We break down the pros, cons, and costs to help you make the best choice for your home.",
    date: "September 10, 2023",
    author: "Westside Scapes Team",
    image: "images/service-paving.jpg",
    category: "Design",
    content: `
      <p>One of the most common questions we get during consultations is: "Should I go with decking or paving?" Both have their merits, and the "right" choice often depends on your specific site, budget, and aesthetic preference.</p>

      <h3>Timber Decking</h3>
      <p><strong>Pros:</strong></p>
      <ul>
        <li><strong>Aesthetic Warmth:</strong> Timber adds a natural, warm look that softens modern architecture.</li>
        <li><strong>Site Adaptability:</strong> Perfect for sloping blocks or covering uneven ground without major excavation.</li>
        <li><strong>Temperature:</strong> Generally stays cooler underfoot than dark pavers in direct sun.</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li><strong>Maintenance:</strong> Requires annual oiling or staining to prevent rotting and fading.</li>
        <li><strong>Longevity:</strong> Even well-maintained decks have a shorter lifespan than stone or concrete.</li>
      </ul>

      <h3>Paving</h3>
      <p><strong>Pros:</strong></p>
      <ul>
        <li><strong>Durability:</strong> Quality stone or concrete pavers can last a lifetime with minimal care.</li>
        <li><strong>Low Maintenance:</strong> A quick sweep or pressure wash is usually all that's needed.</li>
        <li><strong>Variety:</strong> Endless options in size, color, texture, and pattern (e.g., French pattern travertine vs. sleek bluestone).</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li><strong>Prep Work:</strong> Requires a solid, level base, which can mean significant excavation and cost on sloping sites.</li>
        <li><strong>Heat:</strong> Darker stones can get very hot in the peak of summer.</li>
      </ul>

      <h3>The Verdict</h3>
      <p>If you have a flat block and want a "set and forget" solution, paving is often the winner. If you have a sloping block or want to create a seamless indoor-outdoor flow with floorboards, decking is ideal. Often, a combination of both creates the most dynamic and functional landscape.</p>
    `
  }
];