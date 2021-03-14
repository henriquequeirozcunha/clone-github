import React from 'react'

import {
  Container,
  TopSide,
  BottomSide,
  RepoIcon,
  ForkIcon,
  StarIcon,
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  username: string
  reponame: string
  description?: string
  language?: string
  stars: number
  forks: number
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other'
  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </TopSide>
      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  )
}

export default RepoCard
