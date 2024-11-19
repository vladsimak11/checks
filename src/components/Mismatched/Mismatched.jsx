import React, { useState } from 'react';

import { Container, Header3, Block, Label, Input, Button, Countries, Header4, List, Item } from './Mismatched.styled';

export const Mismatched = () => {
  const [list1, setList1] = useState('');
  const [list2, setList2] = useState('');
  const [uniqueToFirst, setUniqueToFirst] = useState([]);
  const [uniqueToSecond, setUniqueToSecond] = useState([]);

  const handleCompare = () => {
    const countries1 = list1.split(', ').map((country) => country.trim());
    const countries2 = list2.split(', ').map((country) => country.trim());

    // Країни, яких немає в першому списку, але є в другому
    const uniqueToFirstList = countries2.filter((country) => !countries1.includes(country));

    // Країни, яких немає в другому списку, але є в першому
    const uniqueToSecondList = countries1.filter((country) => !countries2.includes(country));

    setUniqueToFirst(uniqueToFirstList);
    setUniqueToSecond(uniqueToSecondList);
  };

  return (
    <Container>
      <Header3>Comparison of country lists</Header3>
      <Block>
        <Label htmlFor="list1">List of countries 1:</Label>
        <Input
          id="list1"
          type="text"
          value={list1}
          onChange={(e) => setList1(e.target.value)}
          placeholder="Enter countries separated by commas"
        />
      </Block>
      <Block>
        <Label htmlFor="list2">List of countries 2:</Label>
        <Input
          id="list2"
          type="text"
          value={list2}
          onChange={(e) => setList2(e.target.value)}
          placeholder="Enter countries separated by commas"
        />
      </Block>
      <Button onClick={handleCompare}>
        Compare
      </Button>

      <Countries>
        <Header4>Countries not in the first list but in the second:</Header4>
        {uniqueToFirst.length > 0 ? (
          <List>
            {uniqueToFirst.map((country, index) => (
              <Item key={index}>{country}</Item>
            ))}
          </List>
        ) : (
          <p>There are no such countries.</p>
        )}
      </Countries>

      <Countries>
        <Header4>Countries not in the second list but in the first:</Header4>
        {uniqueToSecond.length > 0 ? (
          <List>
            {uniqueToSecond.map((country, index) => (
              <Item key={index}>{country}</Item>
            ))}
          </List>
        ) : (
          <p>There are no such countries.</p>
        )}
      </Countries>
    </Container>
  );
}

