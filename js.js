// ============================================================================
// DADOS DOS CERTIFICADOS
// ============================================================================

const categories = [
    {
        id: 'programming',
        name: 'Programação e Lógica',
        description: 'Fundamentos de programação e lógica de desenvolvimento'
    },
    {
        id: 'infrastructure',
        name: 'Desenvolvimento e Infraestrutura',
        description: 'Desenvolvimento de software e infraestrutura de sistemas'
    },
    {
        id: 'database',
        name: 'Dados e Bancos de Dados',
        description: 'Gerenciamento de dados e bancos de dados'
    },
    {
        id: 'softskills',
        name: 'Soft Skills e Comunicação',
        description: 'Desenvolvimento de habilidades interpessoais'
    },
    {
        id: 'innovation',
        name: 'Inovação e Multimídia',
        description: 'Inovação tecnológica e produção multimídia'
    }
];

const certificates = [
    // Programação e Lógica
    {
        id: 'prog-1',
        title: 'Começando em Programação - carreira e primeiros passos',
        category: 'programming',
        fileName: 'Começando em Programação - carreira e primeiros passos.pdf',
        color: '#1e3a8a'
    },
    {
        id: 'prog-2',
        title: 'JavaScript e HTML - desenvolva um jogo e pratique lógica de programação',
        category: 'programming',
        fileName: 'JavaScript e HTML -  desenvolva um jogo e pratique lógica de programação.pdf',
        color: '#1e3a8a'
    },
    {
        id: 'prog-3',
        title: 'Lógica de programação - mergulhe em programação com JavaScript',
        category: 'programming',
        fileName: 'Lógica de programação - mergulhe em programação com JavaScript.pdf',
        color: '#1e3a8a'
    },
    {
        id: 'prog-4',
        title: 'Lógica de programação - explore funções e listas',
        category: 'programming',
        fileName: 'Lógica de programação -  explore funções e listas.pdf',
        color: '#1e3a8a'
    },
    {
        id: 'prog-5',
        title: 'Lógica de programação - praticando com desafios',
        category: 'programming',
        fileName: 'Lógica de programação - praticando com desafios.pdf',
        color: '#1e3a8a'
    },

    // Desenvolvimento e Infraestrutura
    {
        id: 'infra-1',
        title: 'Git e GitHub - compartilhando e colaborando em projetos',
        category: 'infrastructure',
        fileName: 'Git e GitHub -  compartilhando e colaborando em projetos.pdf',
        color: '#059669'
    },
    {
        id: 'infra-2',
        title: 'Linux Onboarding - usando a CLI de uma forma rápida e prática',
        category: 'infrastructure',
        fileName: 'Linux Onboarding -  usando a CLI de uma forma rápida e prática.pdf',
        color: '#059669'
    },
    {
        id: 'infra-3',
        title: 'JMS e ActiveMQ - mensageria com Java',
        category: 'infrastructure',
        fileName: 'JMS e ActiveMQ - mensageria com Java.pdf',
        color: '#059669'
    },
    {
        id: 'infra-4',
        title: 'Microsserviços na prática - implementando com Java',
        category: 'infrastructure',
        fileName: 'Microsserviços na prática - implementando com Java.pdf',
        color: '#059669'
    },
    {
        id: 'infra-5',
        title: 'Programação orientada a objetos com Java',
        category: 'infrastructure',
        fileName: 'Programação orientada a objetos com Java.pdf',
        color: '#059669'
    },
    {
        id: 'infra-6',
        title: 'Spring Boot 3: acelere o desenvolvimento de microsserviços Java',
        category: 'infrastructure',
        fileName: 'Spring Boot 3: acelere o desenvolvimento de microsserviços Java.pdf',
        color: '#059669'
    },

    // Dados e Bancos de Dados
    {
        id: 'db-1',
        title: 'MongoDB: uma abordagem moderna para trabalhar com dados',
        category: 'database',
        fileName: 'MongoDB: uma abordagem moderna para trabalhar com dados.pdf',
        color: '#dc2626'
    },
    {
        id: 'db-2',
        title: 'Oracle Database: desenvolvendo com SQL',
        category: 'database',
        fileName: 'Oracle Database: desenvolvendo com SQL.pdf',
        color: '#dc2626'
    },
    {
        id: 'db-3',
        title: 'SQL com MySQL: manipule e consulte dados',
        category: 'database',
        fileName: 'SQL com MySQL: manipule e consulte dados.pdf',
        color: '#dc2626'
    },

    // Soft Skills e Comunicação
    {
        id: 'soft-1',
        title: 'Comunicação - como se expressar bem e ser compreendido',
        category: 'softskills',
        fileName: 'Comunicação - como se expressar bem e ser compreendido.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-2',
        title: 'Comunicação assertiva - reduzindo conflitos e frustrações',
        category: 'softskills',
        fileName: 'Comunicação assertiva - reduzindo conflitos e frustrações.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-3',
        title: 'Comunicação não violenta - consciência para agir',
        category: 'softskills',
        fileName: 'Comunicação não violenta - consciência para agir.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-4',
        title: 'Comunicação não violenta parte 2 - mantendo a empatia',
        category: 'softskills',
        fileName: 'Comunicação não violenta parte 2 - mantendo a empatia.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-5',
        title: 'Feedback - a arte de orientar e ser orientado com sentido',
        category: 'softskills',
        fileName: 'Feedback - a arte de orientar e ser orientado com sentido.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-6',
        title: 'Oratória - técnicas de apresentação que funcionam',
        category: 'softskills',
        fileName: 'Oratória - técnicas de apresentação que funcionam.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-7',
        title: 'Produção de vídeos para a internet - técnicas de storytelling',
        category: 'softskills',
        fileName: 'Produção de vídeos para a internet - técnicas de storytelling.pdf',
        color: '#7c3aed'
    },
    {
        id: 'soft-8',
        title: 'Resiliência - desenvolvendo sua capacidade de lidar com adversidades',
        category: 'softskills',
        fileName: 'Resiliência - desenvolvendo sua capacidade de lidar com adversidades.pdf',
        color: '#7c3aed'
    },

    // Inovação e Multimídia
    {
        id: 'inov-1',
        title: 'INTELIGÊNCIA ARTIFICIAL GENERATIVA',
        category: 'innovation',
        fileName: 'INTELIGÊNCIA ARTIFICIAL GENERATIVA.pdf',
        color: '#f59e0b'
    },
    {
        id: 'inov-2',
        title: 'Produção de vídeos para a internet - técnicas de storytelling',
        category: 'innovation',
        fileName: 'Produção de vídeos para a internet - técnicas de storytelling.pdf',
        color: '#f59e0b'
    }
];

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Obtém certificados por categoria
 */
function getCertificatesByCategory(categoryId) {
    if (categoryId === 'all') {
        return certificates;
    }
    return certificates.filter(cert => cert.category === categoryId);
}

/**
 * Obtém a cor da categoria
 */
function getCategoryColor(categoryId) {
    const colorMap = {
        'programming': '#1e3a8a',
        'infrastructure': '#059669',
        'database': '#dc2626',
        'softskills': '#7c3aed',
        'innovation': '#f59e0b'
    };
    return colorMap[categoryId] || '#1e3a8a';
}

/**
 * Cria um card de certificado
 */
function createCertificateCard(certificate) {
    const categoryName = categories.find(c => c.id === certificate.category)?.name || 'Sem categoria';
    const categoryColor = getCategoryColor(certificate.category);

    const card = document.createElement('div');
    card.className = 'certificate-card';
    card.style.borderLeftColor = categoryColor;
    card.innerHTML = `
        <div class="certificate-card-header">
            <h3 class="certificate-title">${certificate.title}</h3>
        </div>
        <div class="certificate-category" style="background-color: ${categoryColor}">
            ${categoryName}
        </div>
        <button class="download-btn" onclick="downloadCertificate('${certificate.fileName}')">
            <svg class="download-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            Baixar
        </button>
    `;

    return card;
}

/**
 * Renderiza os certificados
 */
function renderCertificates(categoryId = 'all') {
    const container = document.getElementById('certificatesContainer');
    const displayedCerts = getCertificatesByCategory(categoryId);

    // Limpa o container
    container.innerHTML = '';

    // Adiciona os certificados
    displayedCerts.forEach((cert, index) => {
        const card = createCertificateCard(cert);
        card.style.animationDelay = `${index * 0.05}s`;
        container.appendChild(card);
    });

    // Atualiza o título
    const title = document.querySelector('.certificates-title');
    if (categoryId === 'all') {
        title.textContent = 'Todos os Certificados';
    } else {
        const category = categories.find(c => c.id === categoryId);
        title.textContent = category?.name || 'Certificados';
    }
}

/**
 * Baixa um certificado
 */
function downloadCertificate(fileName) {
    const link = document.createElement('a');
    link.href = `certificates/${encodeURIComponent(fileName)}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Renderiza os certificados inicialmente
    renderCertificates('all');

    // Adiciona event listeners aos botões de categoria
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe active ao botão clicado
            this.classList.add('active');

            // Renderiza os certificados da categoria selecionada
            const categoryId = this.dataset.category;
            renderCertificates(categoryId);
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
