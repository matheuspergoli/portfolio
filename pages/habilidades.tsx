import Head from 'next/head'
import Title from '../components/Title'
import Skills from '../components/Skills'
import ReactSkillbar from 'react-skillbars'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'
import { SiVite as ViteImg } from 'react-icons/si'
import { GrNode as NodeImg } from 'react-icons/gr'
import { FaReact as ReactImg } from 'react-icons/fa'
import { SiMysql as MysqlImg } from 'react-icons/si'
import { SiMongodb as MongoImg } from 'react-icons/si'
import { GiBrazilFlag as BrImg } from 'react-icons/gi'
import { SiMaterialui as MUIimg } from 'react-icons/si'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { TbBrandNextjs as Nextjs } from 'react-icons/tb'
import { RiEnglishInput as ENImg } from 'react-icons/ri'
import { SiExpress as ExpressImg } from 'react-icons/si'
import { GiSmartphone as PhoneImg } from 'react-icons/gi'
import { SiTailwindcss as TailImg } from 'react-icons/si'
import { SiFirebase as FirebaseImg } from 'react-icons/si'
import { SiSupabase as SupabaseImg } from 'react-icons/si'
import { SiPostgresql as PostgreImg } from 'react-icons/si'
import { DiCss3 as CSSImg, DiSass as SassImg } from 'react-icons/di'
import { SiHtml5 as HtmlImg, SiJavascript as JSImg } from 'react-icons/si'
import { SiTypescript as TSImg, SiStyledcomponents as StyledImg } from 'react-icons/si'

const skills = [
	{ type: 'HTML5', level: 75 },
	{ type: 'CSS3', level: 75 },
	{ type: 'JavaScript', level: 70 },
	{ type: 'NextJS', level: 60 },
	{ type: 'ReactJS', level: 60 },
	{ type: 'TypeScript', level: 50 },
	{ type: 'TailwindCSS', level: 60 },
	{ type: 'Git/Github', level: 55 }
]

const colors = {
	bar: '#04c2c9',
	title: {
		text: '#fff',
		background: '#333'
	}
}

function Habilidades() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Habilidades</title>
			</Head>
			<main className='pt-20 px-3 md:p-3'>
				<Title>Front-End</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={1} title='HTML5' image={<HtmlImg className='group-hover:scale-125 transition' />} />
					<Skills index={2} title='CSS3' image={<CSSImg className='group-hover:scale-125 transition' />} />
					<Skills index={3} title='JavaScript' image={<JSImg className='group-hover:scale-125 transition' />} />
					<Skills index={4} title='TypeScript' image={<TSImg className='group-hover:scale-125 transition' />} />
					<Skills index={5} title='ReactJS' image={<ReactImg className='group-hover:scale-125 transition' />} />
					<Skills index={6} title='NextJS' image={<Nextjs className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Estilização</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={7} title='Styled-Components' image={<StyledImg className='group-hover:scale-125 transition' />} />
					<Skills index={8} title='TailwindCSS' image={<TailImg className='group-hover:scale-125 transition' />} />
					<Skills index={9} title='Material-UI' image={<MUIimg className='group-hover:scale-125 transition' />} />
					<Skills index={10} title='SCSS' image={<SassImg className='group-hover:scale-125 transition' />} />
					<Skills index={11} title='Responsividade' image={<PhoneImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Back-End</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={12} title='NodeJS' image={<NodeImg className='group-hover:scale-125 transition' />} />
					<Skills index={13} title='Express' image={<ExpressImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Banco de dados</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={14} title='MySQL 8' image={<MysqlImg className='group-hover:scale-125 transition' />} />
					<Skills index={15} title='PostgreSQL' image={<PostgreImg className='group-hover:scale-125 transition' />} />
					<Skills index={16} title='MongoDB' image={<MongoImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Backend as a service</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={17} title='Firebase' image={<FirebaseImg className='group-hover:scale-125 transition' />} />
					<Skills index={18} title='Supabase' image={<SupabaseImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Development Tools</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={19} title='Vite' image={<ViteImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>DevOps</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={20} title='Git-Github' image={<GitImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Idiomas</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={21} title='Inglês-US' image={<ENImg className='group-hover:scale-125 transition' />} />
					<Skills index={22} title='Português-BR' image={<BrImg className='group-hover:scale-125 transition' />} />
				</section>

				<Title>Principais habilidades</Title>
				<section className='mx-auto max-w-5xl pl-5 pr-5 pb-5 text-main-black'>
					<ReactSkillbar skills={skills} colors={colors} animationDelay={250} barBackground={'#555'} />
				</section>
			</main>
		</AnimateFadeDiv>
	)
}

export default Habilidades
