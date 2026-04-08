import styled from 'styled-components';
import { useState } from 'react';

// Aqui é onde a mágica do Styled-components acontece:
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex; justify-content: center; align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 4px solid ${props => props.isEpic ? 'gold' : '#e62429'}; 
  /* ^ Repare na lógica acima: se for épico é dourado, se não, é vermelho Marvel */
`;

const Botao = styled.button`
  background: #e62429;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 15px;
  &:hover { background: #b11b1f; }
`;

export default function StatusModal() {
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <Botao onClick={() => setAberto(true)}>Ver Aviso da Marvel</Botao>

      {aberto && (
        <Overlay onClick={() => setAberto(false)}>
          <ModalBox isEpic={true} onClick={e => e.stopPropagation()}>
            <h2>AVISO ÉPICO!</h2>
            <p>Você acabou de visualizar a melhor lista de filmes do UCM.</p>
            <Botao onClick={() => setAberto(false)}>Fechar</Botao>
          </ModalBox>
        </Overlay>
      )}
    </div>
  );
}