import { useState } from 'react';
import { Container, Title, Input, Button, Result} from './AR.styled';


export const AR = () => {
    const [successes, setSuccesses] = useState('');
    const [failures, setFailures] = useState('');
    const [ar, setAr] = useState(null);
    const [error, setError] = useState(null);
  
    const calculateAR = () => {
      const successNum = parseInt(successes, 10);
      const failureNum = parseInt(failures, 10);
  
      if (isNaN(successNum) || isNaN(failureNum) || successNum < 0 || failureNum < 0) {
        setError('Будь ласка, введіть коректні додатні числа.');
        setAr(null);
        return;
      }
  
      const total = successNum + failureNum;
      if (total === 0) {
        setError('Загальна кількість не може бути нульовою.');
        setAr(null);
        return;
      }
  
      const calculatedAR = ((successNum / total) * 100).toFixed(2);
      setAr(calculatedAR);
      setError(null);
    };
  
    return (
      <Container>
        <Title>AR Calculator</Title>
        <Input
          type="number"
          placeholder="Успіхи"
          value={successes}
          onChange={(e) => setSuccesses(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Не успіхи"
          value={failures}
          onChange={(e) => setFailures(e.target.value)}
        />
        <Button onClick={calculateAR}>Розрахувати AR</Button>
        {error && <Result isError>{error}</Result>}
        {ar !== null && !error && <Result>AR: {ar}%</Result>}
      </Container>
    );
  };