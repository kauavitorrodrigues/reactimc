# Calculadora de IMC

Este é um projeto simples de calculadora de IMC (Índice de Massa Corpórea) desenvolvido com ReactJS e TypeScript. O IMC é um parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa com base na sua altura e peso.

## Tecnologias Utilizadas

- **ReactJS:** Biblioteca JavaScript para criar interfaces de usuário.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **CSS Modules:** Estilização dos componentes com escopo local.

## Funcionalidades

- **Calcular IMC:** O usuário pode inserir sua altura e peso para calcular o IMC.
- **Exibição do Resultado:** Após o cálculo, o IMC é exibido juntamente com uma descrição do nível correspondente.
- **Reset:** O usuário pode resetar os campos de entrada e realizar um novo cálculo.

## Estrutura do Projeto

- **App.module.css:** Arquivo de estilos usando CSS Modules.
- **assets/:** Pasta contendo as imagens utilizadas no projeto.
- **helpers/imc.ts:** Módulo que contém a lógica para calcular o IMC e os níveis correspondentes.
- **components/GridItem.tsx:** Componente que exibe o item de nível do IMC.

## Como Executar o Projeto

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/reactimc

   cd reactimc
2. **Instale as Dependências:**

   ```bash
   npm install
3. **Inicie o Servidor de Desenvolvimento:**

   ```bash
   npm start
