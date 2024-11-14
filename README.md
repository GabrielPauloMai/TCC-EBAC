# TCC-EBAC - Qualidade de Software

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso para a EBAC, com foco em automação de testes de qualidade de software. O projeto cobre testes de interface (UI), API e performance, integrados a um pipeline de CI/CD com o Jenkins. Os testes visam garantir a qualidade e estabilidade de uma aplicação de e-commerce, abordando desde a validação do fluxo de adicionar itens ao carrinho até a autenticação de usuários.

## Sumário
- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Testes Automatizados](#testes-automatizados)
  - [Automação de UI (Cypress)](#automação-de-ui-cypress)
  - [Automação de API (Cypress)](#automação-de-api-cypress)
  - [Teste de Performance (JMeter)](#teste-de-performance-jmeter)
- [Integração Contínua (Jenkins)](#integração-contínua-jenkins)
- [Como Executar os Testes](#como-executar-os-testes)
- [Estrutura de Arquivos](#estrutura-de-arquivos)

## Visão Geral
O projeto tem como objetivo assegurar a qualidade da aplicação de e-commerce da EBAC, cobrindo testes essenciais para as principais funcionalidades. Com uma abordagem prática, o projeto utiliza automação para maximizar a eficiência e precisão dos testes, reduzindo o esforço manual e integrando-os em um pipeline de CI/CD com o Jenkins para execução contínua.

## Tecnologias Utilizadas
- **Cypress**: Para testes de UI e API.
- **Apache JMeter**: Para testes de performance.
- **Jenkins**: Para automação de integração contínua.

## Testes Automatizados
### Automação de UI (Cypress)
Os testes de UI cobrem o fluxo de adicionar itens ao carrinho na aplicação. O script adiciona três produtos diferentes ao carrinho e verifica se eles foram incluídos com sucesso.

### Automação de API (Cypress)
Os testes de API cobrem a funcionalidade de listar cupons e cadastrar novos cupons na plataforma. O teste de listagem utiliza o método GET para recuperar todos os cupons, e o teste de cadastro utiliza o método POST para inserir um novo cupom, validando os campos obrigatórios.

### Teste de Performance (JMeter)
O teste de performance simula 20 usuários virtuais acessando o fluxo de login da aplicação durante um período de 2 minutos. O JMeter utiliza uma massa de dados dinâmica com credenciais de usuário e senha armazenadas em um arquivo CSV.

## Integração Contínua (Jenkins)
O Jenkins foi configurado para automatizar a execução dos testes com um Jenkinsfile. O pipeline realiza as seguintes etapas:

1. **Instalar dependências**: Instala o Cypress e outras dependências do projeto.
2. **Executar testes**: Roda os testes de UI e API automaticamente.

## Como Executar os Testes
### Clone o Repositório
```bash
git clone https://github.com/GabrielPauloMai/TCC-EBAC.git
cd TCC-EBAC
```

### Instale as Dependências:
```bash
cd automated-tests
npm install
```

### Execute os Testes de UI e API:
  ```bash
  npm test
  ```

### Execute o Teste de Performance no JMeter:
Abra o arquivo `.jmx` no JMeter e inicie o teste.

## Estrutura de Arquivos
- **automated-tests/UI**: Testes de interface com Cypress.
- **automated-tests/API**: Testes de API com Cypress.
- **/jmeter**: Teste de performance com JMeter.
- **Jenkinsfile**: Pipeline de integração contínua para execução dos testes.

