import React from 'react'

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles'
import { Link } from 'react-router-dom'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/henriquequeirozcunha'}>
          henriquequeirozcunha
        </Link>
        <span>/</span>
        <Link className={'reponame'} to={'/henriquequeirozcunha/clone-github'}>
          clone-github
        </Link>
      </Breadcrumb>
      <p>Contains all of clone-github code!</p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>10</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href='https://github.com/henriquequeirozcunha/clone-github'>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  )
}

export default Repo
