// Interface para o <ProjetoModal />
interface ProjetoModalProps {
	tech: string
	link: string
	rep: string
	nome: string
	source: string
}

// Interface para <Skills />
interface SkillsProps {
	title: string
	image: any
	index: number
}

// Interface de um Projeto
interface Projeto {
	id: string
	link: string
	nome: string
	repositorio: string
	tecnologias: string
	imagem: {
		url: string
	}
}

// Interface para um Array de Projeto
interface Projetos {
	allProjetos: Array<Projeto>
}