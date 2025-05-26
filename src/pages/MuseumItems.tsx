const UPVItems = [
    {
        name: 'Background',
        image: '/background-UPV-MACH.jpg',
        description: 'This is the front of the UPV MACH, located in the old Iloilo City Hall. The building has a classic, old-school look with big columns and arched windows—designed by famous architect Juan Arellano. Now part of UP Visayas, it’s a cool mix of history and art that really sets the vibe before you even step inside.'
    },
    {
        name: 'Paintings by Juan Arellano',
        image: '/paintings-by-juan-arellano.jpg',
        description: 'This piece features six small landscape paintings by Juan Arellano, all framed together. Each one shows peaceful sceneries—like mountains, trees, houses, and quiet pathways. While Arellano is best known as an architect, this artwork shows his talent in painting, capturing calm, rural scenes with soft colors and a sense of quiet beauty.'
    },
    {
        name: 'El Asesinato Del Gobernador Bustamante El Su Hijo by Hidalgo',
        image: '/el-asesinato_del_gobernador_bustamante_el_su_hijo_by_hidalgo.jpg',
        description: 'This dramatic painting by Hidalgo shows the violent assassination of Governor Bustamante and his son. It’s full of emotion—people struggling, bodies falling, and chaos everywhere. Hidalgo used dark tones and strong expressions to tell a powerful story about injustice and conflict during the Spanish colonial period. It’s intense, but really makes you stop and look.It made me think about how art can capture such strong moments in history.'
    },
    {
        name: 'Per Pacem Et Libertatem by Hidalgo',
        image: '/per-pacem-et-libertatem-by-hidalgo.jpg',
        description: 'Commissioned by the American government, this painting symbolizes the relationship between the United States and the Philippines. The U.S. is depicted as a woman holding the flag, while the Philippines offers a flower. Above them shines the light of liberty. The original mural was destroyed during World War II'
    },
    {
        name: 'La Derrota De Limahong by Hidalgo',
        image: '/la-derrota-de-limahong-by-hidalgo.jpg',
        description: 'This painting by Hidalgo depicts the dramatic defeat of the pirate Limahong and his forces during their invasion attempt in the Philippines. The scene captures the aftermath of the battle, with the bodies of Limahong’s men scattered, emphasizing the chaos and violence of the event.'
    },
    {
        name: 'La Barca De Aqueronte by Hidalgo',
        image: '/la-barca-de-aqueronte-by-hidalgo.jpg',
        description: 'La Barca de Aqueronte depicts the mythical journey across the river Styx in Greek mythology, where souls are ferried to the underworld. Hidalgo’s dramatic portrayal features the boat and its passengers, with dark, ominous tones creating a sense of foreboding.'
    },
    {
        name: 'Christ Down from the Cross by Juan Arellano',
        image: '/christ-down-from-the-cross-by-juan-arellano.jpg',
        description: 'This painting by Juan Arellano captures the moment Christ is taken down from the cross after His crucifixion. The scene is full of emotion, with the figures around Him showing sorrow and reverence. '
    },
    {
        name: 'Ensueños de Amor by Juan Luna',
        image: '/ensuenos-de-amor-by-juan-luna.jpg',
        description: 'This painting portrays Luna’s wife in a peaceful, almost dreamlike state, lying in bed. The title, which means “Daydreams of Love,” adds a soft, intimate tone. But knowing Luna’s tragic history — that he later killed his wife in a jealous rage — the painting carries a haunting contrast. What was once a tender image of love now echoes with sorrow and irony. It’s a chilling reminder of how beauty and tragedy can be bound together in a single story.'
    },
    {
        name: 'Kimona at Patadyong and Baro\'t Saya',
        image: '/kimona-at-patadyong-and-barot-saya.jpg',
        description: 'These traditional outfits aren’t just clothes—they’re living stories of Filipino heritage. The Kimona and Patadyong speak of everyday grace in the Visayas, while the Baro’t Saya shows how Filipinas embraced change without losing their soul. Together, they celebrate resilience and timeless pride.'
    },
    {
        name: 'Buttons and Buckles',
        image: '/buttons-and-buckles.jpg',
        description: 'Small but mighty, these buttons and buckles were the finishing touches that told stories of status and style. They remind us how even the tiniest details in fashion carry the weight of history and culture—proof that every piece of clothing has its own tale to tell.'
    },
    {
        name: 'Barong Tagalog',
        image: '/barong-tagalog.jpg',
        description: 'More than just a shirt, the Barong is a symbol of Filipino dignity and tradition. Its light fabric and intricate embroidery whisper stories of the past, blending native artistry with colonial history — a perfect wear for moments that matter.'
    },
    {
        name: 'Panubok Embroidery',
        image: '/panubok-embroidery.jpg',
        description: 'This delicate needlework is like a thread of Filipino soul woven into fabric. Panubok shows how even the tiniest stitches carry stories of patience, tradition, and artistry passed down through generations. It’s more than decoration — it’s a beautiful way Filipinos express identity and pride.'
    },
    {
        name: 'Hablon',
        image: '/hablon.jpg',
        description: 'Hablon isn’t just fabric — it’s a vibrant thread connecting generations. This traditional woven cloth from the Visayas bursts with colors and patterns that tell stories of community, culture, and creativity. Wearing or seeing Hablon feels like wrapping yourself in history and pride.'
    },
    {
        name: 'The Museum Gates',
        image: '/the-museum-gates.jpg',
        description: 'These gates tell a quiet story of craftsmanship from an era before modern welding—likely built in the early 1900s or late 1800s. The fact that they weren’t welded but joined by traditional metal work shows a patience and skill that’s rare today. Standing before them, you can almost feel the hands that carefully shaped each piece, bridging history and art.'
    },
    {
        name: 'Magdalena 24/7 On Call (2023) By Boy Masculino',
        image: '/magdalena-247-on-call-2023-by-boy-masculino.jpg',
        description: 'Driftwood, a WWII telephone, car plates, pistons, sprockets, and scrap metal combine in this steampunk-inspired sculpture—a powerful tribute to the Filipina’s strength and resilience. Always on call, always enduring, she represents the tireless labor and spirit of Filipino women.'
    },
    {
        name: 'Karosa',
        image: '/karosa.jpg',
        description: 'More than just an old vehicle, the Karosa was a lifeline—carrying people, stories, and everyday hustle across towns. It’s a rolling symbol of community and connection before modern transport took over. Seeing it feels like stepping back to simpler times when every ride meant shared laughter and familiar faces.'
    },
    {
        name: 'Suyod: A Tool of Precision in Rice Farming',
        image: '/suyod-a-tool-of-precision-in-rice-farming.jpg',
        description: 'The suyod is a traditional wooden implement used to level rice fields, ensuring even water distribution for healthy crop growth. With its straightforward design and practical purpose, it’s a quiet testament to the skill and insight of indigenous Filipino farming practices—where precision meets simplicity.'
    },
    {
        name: 'Karas: A Tool Rooted in Tradition',
        image: '/karas-a-tool-rooted-in-tradition.jpg',
        description: 'Made from sturdy bamboo, the karas is a traditional farming tool used to till soil and clear weeds—an example of indigenous ingenuity that’s both simple and sustainable. Still used in some rural communities today, it speaks to a deep, enduring relationship between farmer and land.'
    },
    {
        name: 'The Araro',
        image: '/the-araro.jpg',
        description: 'Long before machines, the araro—a wooden plow with an iron blade—was the farmer’s trusted tool, pulled by carabao and guided by hand. More than an implement, it’s a symbol of Filipino resilience and ancestral wisdom, carving not just soil, but a heritage of labor, patience, and deep respect for the land.'
    },
    {
        name: '???',
        image: '/',
        description: '/'
    },
    {
        name: 'Kararaw',
        image: '/kararaw.jpg',
        description: 'This traditional tool shows the cleverness woven into everyday life. Used to separate debris from rice grains, the Kararaw reflects how simple yet effective design helps Filipino farmers with their harvest.'
    },
    {
        name: 'Amakan',
        image: '/amakan.jpg',
        description: 'Made from woven bamboo, the amakan is a traditional Filipino mat used for drying rice, beans, and grains—or for catching them during threshing with a linasan. Its form may be simple, but its function speaks volumes about resourcefulness and daily life in the countryside.'
    },
    {
        name: 'Panaklob and Taon',
        image: '/panaklob-and-taon.jpg',
        description: 'Crafted from bamboo and shaped by generations of experience, the panaklob and taon are traditional fish traps still used in Panay today. More than tools, they reflect a deep connection to nature—timed with the tides, built with care, and passed down through the wisdom of coastal life. A quiet testament to sustainable living and cultural continuity.'
    },
    {
        name: 'Mga Panaming',
        image: '/mga-panaming.jpg',
        description: 'These sacred charms aren’t just talismans—they’re believed to protect people from the aswang and other dark spirits. Rooted deeply in local folklore, panaming shows how Filipinos blend faith, fear, and tradition to keep their communities safe. '
    },
    {
        name: 'Gold Jewelry',
        image: '/gold-jewelry.jpg',
        description: 'This intricate gold jewelry reveals the artistry and wealth of ancient Visayan culture. Handcrafted with delicate detail, each piece tells a story of skill, status, and tradition. Beyond beauty, these treasures connect us to the rich history of the Visayas—where gold wasn’t just adornment, but a symbol of identity and power.'
    },
    {
        name: 'Unearthed Secrets of the Gigantes Islands',
        image: '/',
        description: 'Pottery from as early as 500 BCE reveals the rich history of Isla de Gigantes Norte—vessels once used as offerings in burial rituals, showcasing delicate craftsmanship and mysterious designs. These ancient artifacts connect us to early settlers and their beliefs about life, death, and the afterlife, preserving stories buried deep beneath the islands’ stunning shores.'
    },
    {
        name: 'Conant Coins by Melacio Magbanua',
        image: '/conant-coins-by-melecio-magbanua.jpg',
        description: 'Crafted by Filipino sculptor Melecio Figueroa, these coins were part of the new monetary system introduced during the American colonial period in the early 1900s. Commissioned under the guidance of Charles Conant, Figueroa’s intricate designs—like the woman with an anvil and Mount Mayon—symbolized labor and industry. These coins weren’t just currency; they were an artistic bridge between colonial governance and Filipino identity.'
    },
    {
        name: 'The Three Kings',
        image: '/the-three-kings.jpg',
        description: 'These stoneware figures capture the timeless story of the Magi with minimalist elegance. Each king stands out with its own texture and glaze, yet together they radiate quiet majesty. A perfect harmony of traditional craft and modern artistry.'
    },
    {
        name: 'Mother and Children by Dado Tan',
        image: '/mother-and-children-by-dado-tan.jpg',
        description: 'This 2001 painting by Iloilo artist Dodjie “Dado” Tan captures the enduring bond between a mother and her children. Through expressive forms and warm tones, Tan honors the strength and tenderness of motherhood in Filipino culture, offering a heartfelt tribute to family and care.'
    },
    {
        name: 'Pakpak ng Balita, Tainga ng Lupa by Tyrone Espinosa',
        image: '/pakpak-ng-balita-tainga-ng-lupa-by-tyrone-espinosa.jpg',
        description: 'This sculpture by Tyrone Dave Espinosa, showcased during the Sigahum exhibition, draws inspiration from the Filipino proverb “May pakpak ang balita, may tainga ang lupa”—which translates to “News has wings, the earth has ears.” The artwork embodies the idea that information spreads swiftly and that even the most guarded secrets can be uncovered. Espinosa’s piece invites viewers to reflect on the nature of communication, the spread of gossip, and the ever-watchful presence of the community.'
    },
    {
        name: '"In the Garden" Cold Cast Marble | Harry Mark Gonzales | 2017',
        image: '/in-the-garden-cold-cast-marble-harry-mark-gonzales-2017.jpg',
        description: 'A quiet meditation in stone, In the Garden reflects Harry Mark Gonzales’ deep command of form and emotion. Born in Mandurriao, Iloilo, and mentored by Ed Defensor, Gonzales transforms marble into narrative—grounded in Visayan roots, yet reaching national acclaim through works that speak with both softness and strength.'
    },
    {
        name: 'Kaligtasan by Nelfa A. Querubin',
        image: '/kaligtasan-by-nelfa-a-querubin.jpg',
        description: 'In her 2011 oil pastel painting Kaligtasan, Ilongga artist Nelfa A. Querubin expresses a personal declaration of faith. Known for her mastery in ceramics, Querubin here turns to drawing to explore spiritual themes. The work reflects her journey through life’s trials and her enduring belief in salvation, embodying the resilience and introspection that characterize her broader artistic practice'
    },
    {
        name: 'Dancing for the Moon (2019) by Ed Defensor',
        image: '/dancing-for-the-moon-2019-by-ed-defensor.jpg',
        description: 'Two figures leap toward the moon on a fragile checkerboard suspended above a world in ruins—surrounded by mythical creatures, fallen cities, and signs of destruction and quiet resilience. In this haunting yet hopeful piece, Defensor captures the human spirit’s stubborn will to dream, to reach, and to dance—despite the darkness.'
    },
    {
        name: '"Ethiopian Manuscripts" Ink on Animal Skin | UPV MACH Collection',
        image: '/ethiopian-manuscripts-ink-on-animal-skin-UPV-MACH-collection.jpg',
        description: 'These ancient manuscripts, written in what is likely the Ge’ez script, offer a glimpse into centuries-old religious traditions from Ethiopia and Eritrea. Often used in prayer books or biblical texts, the vivid red ink—known as rubrication—highlights sacred names or important phrases. A beautiful example of spiritual devotion preserved through craftsmanship and script. (Gift of Eloisa and Reginald Zell)'
    },
    {
        name: '"Tibetan Manuscripts" Ink on Paper | UPV MACH Collection',
        image: '/tibetan-manuscripts-ink-on-paper-UPV-MACH-collection.jpg',
        description: 'Written in the elegant uchen script—literally meaning “with a head”—these manuscripts likely contain Buddhist sutras, philosophical writings, or ritual prayers. Often copied by monks, such texts reflect a deep tradition of spiritual scholarship and devotion in Tibetan Buddhism. (Gift of Eloisa and Reginald Zell)'
    }
];

const PMEHItems = [
    {
        name: 'Background',
        image: '/background-PMEH.jpg',
        description: 'Walking through the doors of the building felt like stepping into another era. The high ceilings and restored details hinted at the wealth of stories inside — stories of trade, labor, and everyday Filipinos shaping the economy long before I was born. It wasn’t just a museum; it felt like a quiet conversation with history, inviting me to listen.'
    },
    {
        name: 'Nicholas Loney',
        image: '/nicholas-loney.jpg',
        description: 'Known as the “Father of the Sugar Industry” in Iloilo and Negros, Nicholas Loney’s vision transformed local agriculture by introducing modern sugar milling technology. His efforts helped Iloilo become a major sugar-exporting hub in the 19th century — though this shift also changed the region’s social and '
    },
    {
        name: 'Galleon',
        image: '/galleon.jpg',
        description: 'The mighty galleon was more than just a ship—it was a floating bridge between the Philippines and the world. For over two centuries, it carried spices, silks, and stories across the seas, shaping Iloilo’s role in global trade and leaving a legacy of cultural exchange that still echoes today.c'
    },
    {
        name: 'Chests Used in Galleon',
        image: '/chests-used-in-galleon.jpg',
        description: '/'
    },
    {
        name: 'Treasures from China',
        image: '/treasures-from-china.jpg',
        description: '/'
    },
    {
        name: 'Signal Cannon',
        image: '/signal-cannon.jpg',
        description: 'Once stationed at Iloilo’s old port, this signal cannon played a crucial role in alerting the community of incoming ships or potential threats. Long before radios and phones, its booming sound was the town’s way of staying connected and prepared.'
    },
        {
        name: 'Train Plate',
        image: '/train-plate.jpg',
        description: 'This train plate is a small but powerful reminder of the era when railroads connected Iloilo to the rest of Panay Island. Trains carried people, goods, and stories—fueling growth and linking communities across the region.'
    },
    {
        name: 'Mickey Mouse Money',
        image: '/mickey-mouse-money.jpg',
        description: 'This nickname was given to the emergency currency issued during World War II in the Philippines. Though colorful and familiar, these notes quickly lost value due to inflation, reminding us how war can shake even the most basic parts of everyday life — like money.'
    },
    {
        name: 'The Philippine 100,000 Peso Centennial Banknote',
        image: '/the-philippine-100000-peso-centennial-banknote.jpg',
        description: 'Behold the world’s largest banknote—the 100,000 Philippine Peso commemorative note displayed at the Museum of Philippine Economic History in Iloilo City. Issued in 1998 to mark the centennial of Philippine Independence, this massive legal tender features iconic scenes from the nation’s fight for freedom and holds a Guinness World Record for its size. A rare collector’s masterpiece that honors the enduring spirit of Filipino independence.'
    },
    {
        name: 'Banaue Rice Terraces',
        image: '/banaue-rice-terraces.jpg',
        description: 'Carved by the Ifugao people over 2,000 years ago, these terraces are a breathtaking testament to human ingenuity and harmony with nature. They showcase sustainable farming techniques passed down through generations, symbolizing the deep connection between culture, land, and survival.'
    },
    {
        name: 'Sinaunang Plantsa',
        image: '/sinaunang-plantsa.jpg',
        description: 'Before electric irons, this heavy iron was heated over fire or coals to smooth out wrinkles. It’s a humble reminder of everyday life in the past — where simple tools demanded patience and effort, yet kept clothes crisp and ready for the day.'
    },
    {
        name: 'Aguinaldo Tobacco Box',
        image: '/aguinaldo-tobacco-box.jpg',
        description: 'Displayed at the NHCP-Museum of Philippine Economic History is a Tobacco box with “Aguinaldo” label that contains 25 sticks of tobacco made by La Yebana Cigar Factory.'
    },
    {
        name: 'Tobacco',
        image: '/tobacco.jpg',
        description: 'Once a major cash crop in the Philippines, tobacco shaped local economies and trade during Spanish colonial times. It was both a source of livelihood and a product tied to colonial taxation, impacting communities across the islands.'
    },
    {
        name: 'Abaca Ropes',
        image: '/abaca-ropes.jpg',
        description: 'Strong, durable, and made from the native abaca plant, these ropes have been vital to Filipino life for centuries. Used in shipping, fishing, and everyday tasks'
    },
    {
        name: 'Coconut Shells',
        image: '/coconut-shells.jpg',
        description: 'Copra is the dried meat of the coconut, a crucial product that fueled the Philippines’ coconut oil industry. It became a key export, supporting many livelihoods and connecting local farmers to global markets.'
    },
];

const MPMHItems = [
    {
        name: 'Balangay',
        image: '/balangay.jpg',
        description: 'Seeing the scale model of the Balangay at the Museum of Philippine Maritime History made me appreciate how advanced early Filipinos were in seafaring and boat-building. This ancient wooden boat isn’t just a vessel—it’s a symbol of our maritime heritage, connecting us to pre-colonial times and even giving rise to the word “barangay,” the heart of our communities.'
    },
    {
        name: 'Karakoa',
        image: '/karakoa.jpg',
        description: 'Standing before the Karakoa model at the Museum of Philippine Maritime History, I’m struck by how this sleek, crescent-shaped warship wasn’t just a vessel but a symbol of Filipino bravery and maritime skill. Used in daring sea raids, its speed, design, and warrior crew—marked by blood rites and tattoos—tell a powerful story of courage and honor in precolonial times.'
    },
    {
        name: 'Manunggul Jar',
        image: '/manunggul-jar.jpg',
        description: 'The Manunggul Jar, found in Palawan in 1964, is a Neolithic burial jar dating back to 890–710 BC. Its lid shows two figures in a boat, symbolizing a soul’s journey to the afterlife. Decorated with red ochre and curving designs, it reflects ancient Filipino beliefs and maritime traditions. It is now a National Cultural Treasure displayed at the National Museum of Anthropology.'
    },
    {
        name: 'Admiral Dewey\'s Victory',
        image: '/admiral-deweys-victory.jpg',
        description: '/'
    },
    {
        name: 'The Conquest of the United States of America',
        image: '/',
        description: '/the-conquest-of-the-united-states-of-america.jpg'
    },
    {
        name: 'Soul Sailing Sole',
        image: '/soul-sailing-sole.jpg',
        description: '/'
    },
];

const NMPItems = [
    {
        name: '???',
        image: '/',
        description: '/'
    },
    {
        name: 'Molar of Ancient Elephant of Panay',
        image: '/molar_of_ancient_elephant_of_panay.jpg',
        description: 'The National Museum-Western Visayas Geology and Paleontology Gallery showcases fossilized teeth from two extinct elephant species, Elephas sp. and Stegodon sp., discovered in Sitio Bitoguan, Cabatuan, Iloilo. In 1965, anthropologist F. Landa Jocano found a 1.8-kilogram molar of Elephas sp., dating back around 750,000 years to the Middle Pleistocene, followed by stegodont remains in 1967. These giants were among the largest mammals to roam Panay Island, and their fossils, recovered from the Cabatuan Formation, provide crucial evidence of ancient land bridges that allowed large animals to migrate into the Philippines.'
    },
    {
        name: 'Mudskippers',
        image: '/mudskippers.jpg',
        description: '/'
    },
    {
        name: 'Dugong',
        image: '/dugong.jpg',
        description: '/'
    },
    {
        name: 'Stone Tools',
        image: '/stone-tools.jpg',
        description: '/'
    },
    {
        name: '???',
        image: '/',
        description: '/'
    },
    {
        name: 'Oton Death Mask',
        image: '/oton-death-mask.jpg',
        description: 'The Oton Gold Death Mask, discovered in 1967 in San Antonio, Oton, Iloilo, is the Philippines’ first in situ gold mask and a National Cultural Treasure. Dating back to the late 14th or early 15th century, this exquisite mask, made from finely hammered gold sheets, features intricate swirls and realistic human details created through advanced repoussé and chasing techniques. Beyond its artistry, it embodies ancient Filipino beliefs and the cultural importance of gold in burial rituals.'
    },
    {
        name: 'Ceramics from the Arevalo Shipwreck',
        image: '/ceramics-from-the-arevalo-shipwreck.jpg',
        description: '/'
    },
];

export { UPVItems, PMEHItems, MPMHItems, NMPItems };