import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: '01',
    title: 'Espresso',
    items: [
      { name: 'Void Espresso', description: 'Double Ristretto. Notes of 90% dark chocolate and smoke.', price: '$4.50' },
      { name: 'Velvet Flat White', description: 'Micro-textured milk. Seamless integration.', price: '$5.00' },
      { name: 'Precision Cortado', description: '1:1 Ratio. The perfect equilibrium.', price: '$4.75' },
      { name: 'Long Black', description: 'Hot water, double shot. Crema preserved.', price: '$4.50' }
    ]
  },
  {
    id: '02',
    title: 'Pour Over',
    items: [
      { name: 'Ethiopia Yirgacheffe', description: 'Washed. Jasmine, Bergamot, Lemon zest.', price: '$6.50', badge: 'Floral' },
      { name: 'Colombia Pink Bourbon', description: 'Hybrid washed. Pink grapefruit, honey.', price: '$7.00' },
      { name: 'Gesha Village 1931', description: 'Natural. Papaya, violet, champagne.', price: '$12.00', badge: 'Rare' }
    ]
  },
  {
    id: '03',
    title: 'Signature',
    items: [
      { name: 'Aether Cold Brew', description: 'Nitrogen infused. 24-hour Kyoto drip extraction.', price: '$5.50' },
      { name: 'Obsidian Latte', description: 'Activated charcoal, madagascar vanilla, oat milk.', price: '$6.50' },
      { name: 'Tonic Espresso', description: 'Double shot, fever tree tonic, rosemary essence.', price: '$6.00' }
    ]
  },
  {
    id: '04',
    title: 'Tea & Botanicals',
    items: [
      { name: 'Matcha Ceremonial', description: 'Uji sourced. Whisked to order.', price: '$6.00' },
      { name: 'Cascara Tisane', description: 'Coffee cherry tea. Hibiscus, tamarind notes.', price: '$4.50' }
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-background border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-mono text-xs tracking-widest mb-2 block">CURRENT OFFERINGS</span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">
            Curated Extractions.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {menuData.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="flex items-end gap-4 border-b border-border pb-4">
                <span className="text-neutral-600 font-mono text-lg">/{category.id}</span>
                <h3 className="text-2xl text-white font-medium tracking-tight">{category.title}</h3>
              </div>
              
              <div className="space-y-8">
                {category.items.map((item, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-3">
                        <span className="text-white text-lg font-medium group-hover:text-accent transition-colors">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] uppercase tracking-wider text-black bg-accent px-1.5 py-0.5 font-bold rounded-sm">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-white font-mono text-sm">{item.price}</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-neutral-500 text-sm">
                Seasonal rotation. Beans change weekly based on harvest availability.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;