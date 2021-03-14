import React from 'react'
import {
  Container,
  Main,
  LeftSide,
  RigthSide,
  Repos,
  CalendarHeading,
} from './styles'
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            name={'Henrique Cunha'}
            username={'henriquequeirozcunha'}
            avatarUrl={'https://avatars.githubusercontent.com/u/52020128?v=4'}
            followers={800}
            following={1200}
            company={'Company'}
            location={'Brazil'}
            email={'henriquequeirozcunha@hotmail.com'}
            blog={undefined}
          />
        </LeftSide>
        <RigthSide>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'henriquequeirozcunha'}
                  reponame={'github-conte'}
                  description={'Contains github clone repository'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={2}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RigthSide>
      </Main>
    </Container>
  )
}

export default Profile
