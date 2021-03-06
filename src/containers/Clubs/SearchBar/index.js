import React, { useState } from 'react'
import {
  useLazyQuery,
} from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  SearchContainer, SearchInput, SearchButton, SortContainer, SmallButton,
} from './styles'
import {
  SEARCH,
} from './graphql'


const SearchBar = ({
  input, setInput, search, sortState, setSortState,
}) => {
  const [message, setMessage] = useState('')
  const history = useHistory()

  console.log(sortState)

  /*
  const [search, { loading, error }] = useLazyQuery(
    SEARCH,
    {
      variables: { input },
      onCompleted: ({ login: { token } }) => {
        localStorage.setItem('token', token)
        history.push('/')
      },
      // onError: ({ graphQLErrors }) => {
      //   if (graphQLErrors) {
      //   // graphQLErrors.map(({ message, locations, path }) => console.log(
      //   // `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      //     setMessage(graphQLErrors[0].message)
      //   // ))
      //   }
      // },
    },
  ) */

  return (
    <SearchContainer>
      <SearchInput placeholder="Search Clubs" value={input} onChange={e => setInput(e.target.value)} />
      <SearchButton onClick={search}>Search</SearchButton>
      <SortContainer>
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Sort By: </p>
        <SmallButton onClick={() => setSortState(1)}>A-Z</SmallButton>
        <SmallButton onClick={() => setSortState(2)}>Rating</SmallButton>
        <SmallButton onClick={() => setSortState(3)}>Hours</SmallButton>
      </SortContainer>
    </SearchContainer>
  )
}

export default SearchBar
