const fs = require('fs');

const files = [
    'app/page.tsx',
    'app/incidencia/page.tsx',
    'app/redes/page.tsx',
    'app/formacion/page.tsx',
    'app/videos/page.tsx'
];

for (const file of files) {
    let code = fs.readFileSync(file, 'utf8');

    // Remueve las grillas que tenían al Network visual al lado en el main hero
    code = code.replace(/grid-cols-1 lg:grid-cols-2 gap-16 items-center/, 'grid-cols-1 max-w-4xl');

    // 1. Remueve el tag especial del hero principal
    code = code.replace(/<div className="inline-flex items-center gap-2[^>]*>[\s\S]*?<\/div>/, '');

    // 2. Remueve todos los .tag
    code = code.replace(/<div className="[^"]*\btag\b[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');

    // 3. Remueve todos los .section-subtitle
    code = code.replace(/<p className="[^"]*\bsection-subtitle\b[^"]*"[^>]*>[\s\S]*?<\/p>/g, '');

    // 4. Remueve otros subtítulos (copetes) obvios referenciados
    code = code.replace(/<p className="text-xl text-white\/60 leading-relaxed[^"]*">[\s\S]*?<\/p>/g, '');
    code = code.replace(/<p className="text-lg text-white\/60 leading-relaxed mb-10 max-w-lg">[\s\S]*?<\/p>/g, '');
    code = code.replace(/<p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">[\s\S]*?<\/p>/g, '');
    code = code.replace(/<p className="text-gray-400 mb-8">[\s\S]*?<\/p>/g, '');
    code = code.replace(/<p className="text-gray-500">Lo que estamos haciendo y aprendiendo\.<\/p>/g, '');

    // 5. Remueve Network Visual en page.tsx
    if (file === 'app/page.tsx') {
        code = code.replace(/{\/\* Network visual \*\/}((?:.|\n)*?){\/\* Bottom fade \*\//, '</div>\n\n        {/* Bottom fade */');

        // Remueve Cifras de Impacto
        code = code.replace(/{\/\* ═+\s+CIFRAS DE IMPACTO\s+═+ \*\/}\s*<section className="py-16"[^>]*>[\s\S]*?<\/section>/, '');
    }

    // Escribir archivo limpio
    fs.writeFileSync(file, code);
    console.log(`Cleaned ${file}`);
}
