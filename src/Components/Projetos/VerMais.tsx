import React from 'react'
import styled from 'styled-components'
import { Container, ContainerProjeto, Title, Button } from './Projeto'
import AdviceGenerator from '../../images/advice-generator.jpg'
import BuscadorCep from '../../images/buscador-cep.jpg'
import FlexBlog from '../../images/flexblog.jpg'
import Manage from '../../images/manage.jpg'
import Selfcare from '../../images/selfcare.jpg'
import RickAndMorty from '../../images/rick-and-morty.jpg'
import CountriesAPI from '../../images/countries-api.jpg'
import IntroComponent from '../../images/intro-component.jpg'
import ReactMovie from '../../images/react-movie.jpg'
import Pokenext from '../../images/pokenext.jpg'
import MealDB from '../../images/the-meal-db.jpg'
import Aluratube from '../../images/aluratube.jpg'
import { useNavigate } from 'react-router-dom'
import ProjetoModal from './ProjetoModal'
import { Autocomplete, TextField } from '@mui/material'
import AnimateProgressBar from '../Motion/AnimateProgressBar'

const projects = [
	{
		nome: 'Aluratube',
		source: Aluratube,
		tech: 'NextJS/Typescript/TailwindCSS & DatoCMS',
		link: 'https://aluratube-1.vercel.app/',
		rep: 'https://github.com/matheuspergoli/imersao-react-1'
	},
	{
		nome: 'React Movie',
		source: ReactMovie,
		tech: 'ReactJS/Typescript & TailwindCSS',
		link: 'https://react-movies-imdb.vercel.app/',
		rep: 'https://github.com/matheuspergoli/react-movies'
	},
	{
		nome: 'The Meal DB',
		source: MealDB,
		tech: 'ReactJS/Typescript & TailwindCSS',
		link: 'https://meal-db-api.vercel.app/',
		rep: 'https://github.com/matheuspergoli/the-meal-db'
	},
	{
		nome: 'Pokenext',
		source: Pokenext,
		tech: 'NextJS/Typescript & TailwindCSS',
		link: 'https://pokenext-main.vercel.app/',
		rep: 'https://github.com/matheuspergoli/pokenext'
	},
	{
		nome: 'Rick and Morty API',
		source: RickAndMorty,
		tech: 'React/Typescript & SCSS',
		link: 'https://app-rick-and-morty-api.vercel.app/',
		rep: 'https://github.com/matheuspergoli/rick-and-morty-api'
	},
	{
		nome: 'REST Countries API',
		source: CountriesAPI,
		tech: 'React/Typescript',
		link: 'https://countries-api-web.vercel.app/',
		rep: 'https://github.com/matheuspergoli/countries-api'
	},
	{
		nome: 'Intro Component',
		source: IntroComponent,
		tech: 'HTML/CSS & JS',
		link: 'https://matheuspergoli.github.io/intro-component/',
		rep: 'https://github.com/matheuspergoli/intro-component'
	},
	{
		nome: 'Selfcare',
		source: Selfcare,
		tech: 'HTML/SCSS & JS',
		link: 'https://matheuspergoli.github.io/selfcare/',
		rep: 'https://github.com/matheuspergoli/selfcare'
	},
	{
		nome: 'FlexBlog',
		source: FlexBlog,
		tech: 'HTML/CSS & JS',
		link: 'https://matheuspergoli.github.io/flexblog/',
		rep: 'https://github.com/matheuspergoli/flexblog'
	},
	{
		nome: 'Buscador CEP',
		source: BuscadorCep,
		tech: 'React & CSS',
		link: 'https://buscador-qkhcnlzch-matheuspergoli.vercel.app/',
		rep: 'https://github.com/matheuspergoli/buscador-cep'
	},
	{
		nome: 'Advice Generator',
		source: AdviceGenerator,
		tech: 'HTML/SCSS & JS',
		link: 'https://matheuspergoli.github.io/advice-generator/',
		rep: 'https://github.com/matheuspergoli/advice-generator'
	},
	{
		nome: 'Manage Landing Page',
		source: Manage,
		tech: 'HTML/TailwindCSS & JS',
		link: 'https://matheuspergoli.github.io/manage-landing-page/',
		rep: 'https://github.com/matheuspergoli/manage-landing-page'
	}
]

const options = [
	{ label: 'Aluratube' },
	{ label: 'React Movie' },
	{ label: 'The Meal DB' },
	{ label: 'Pokenext' },
	{ label: 'REST Countries API' },
	{ label: 'Intro Component' },
	{ label: 'Selfcare' },
	{ label: 'FlexBlog' },
	{ label: 'Rick and Morty API' },
	{ label: 'Buscador CEP' },
	{ label: 'Advice Generator' },
	{ label: 'Manage Landing Page' }
]

const animations = {
	initial: { opacity: 0 }
}

type ProjetoProps = {
	nome: string
	source: string
	tech: string
	link: string
	rep: string
}[]

function VerMais() {
	const navigate = useNavigate()
	const [inputValue, setInputValue] = React.useState('')
	const [projetoSelecionado, setProjetoSelecionado] = React.useState<ProjetoProps>([])

	function handleClick() {
		navigate('/sobre/projetos')
	}

	React.useEffect(() => {
		const projetoAtual = projects.filter((projeto) => projeto.nome === inputValue)
		setProjetoSelecionado(projetoAtual)
	}, [inputValue])

	return (
		<>
			<AnimateProgressBar />

			<Autocomplete
				disablePortal
				noOptionsText={'Nada encontrado'}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
				options={options}
				sx={{ maxWidth: 350, margin: '50px auto 0 auto' }}
				renderInput={(params) => <TextField {...params} label='Procure por projetos' />}
			/>

			{projetoSelecionado &&
				projetoSelecionado.map((projeto) => (
					<Container key={projeto.nome}>
						<ContainerProjeto
							variants={animations}
							initial='initial'
							transition={{ duration: 1 }}
							whileInView={{ opacity: 1 }}
							key={projeto.nome}>
							<Title>{projeto.nome}</Title>
							<section>
								<ProjetoModal tech={projeto.tech} link={projeto.link} rep={projeto.rep} nome={projeto.nome} source={projeto.source} />
							</section>
						</ContainerProjeto>
					</Container>
				))}

			<Container>
				{projects.map((projeto) => (
					<ContainerProjeto
						variants={animations}
						initial='initial'
						transition={{ duration: 1 }}
						whileInView={{ opacity: 1 }}
						key={projeto.nome}>
						<Title>{projeto.nome}</Title>
						<section>
							<ProjetoModal tech={projeto.tech} link={projeto.link} rep={projeto.rep} nome={projeto.nome} source={projeto.source} />
						</section>
					</ContainerProjeto>
				))}
			</Container>
			<Button onClick={handleClick}>Voltar</Button>
		</>
	)
}

export default VerMais
