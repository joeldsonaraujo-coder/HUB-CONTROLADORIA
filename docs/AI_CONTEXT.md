# AI_CONTEXT.md

# HUB DE CONTROLADORIA

## Objetivo

Desenvolver um sistema interno para apoio à Controladoria da empresa.

O sistema será executado localmente na máquina do usuário e permitirá consultas, análises gerenciais e visualização de indicadores extraídos do Data Warehouse corporativo.

---

# Tecnologias

Frontend
- React
- TypeScript
- Vite

Backend (futuro)
- Python
- FastAPI

Banco de Dados
- Oracle Data Warehouse (somente leitura)
- Cache local (definição futura)

Controle de versão
- Git
- GitHub

---

# Arquitetura

Frontend
↓

API (FastAPI)

↓

Serviços

↓

Regras de Negócio

↓

Oracle DW

---

# Estrutura do Projeto

HUB-CONTROLADORIA

docs/
frontend/
backend/
database/
scripts/

---

# Estrutura Frontend

components/
pages/
styles/

Cada componente deve possuir responsabilidade única.

O App.tsx deve ser apenas o ponto de entrada da aplicação.

---

# Objetivos da Interface

Interface moderna.

Layout corporativo.

Menu lateral.

Cabeçalho.

Dashboard.

Responsivo.

Visual inspirado em aplicações Microsoft e Power BI.

---

# Funcionalidades previstas

- Dashboard Executivo
- Sala de Situação
- DRE Gerencial
- Receitas
- Custos
- Despesas
- Centro de Custos
- Empresas
- Clientes
- Indicadores
- IA Analítica
- Configurações

---

# Fonte de Dados

Oracle Data Warehouse.

A conexão será realizada utilizando ODBC com autenticação Windows.

As consultas serão provenientes de objetos disponibilizados pelo DBA.

---

# Usuários

Quantidade prevista:
5 usuários.

Todos possuirão o mesmo perfil de acesso.

---

# Metodologia de Desenvolvimento

Cada Sprint deverá possuir:

- Objetivo
- Escopo
- Entregas
- Testes
- Commit Git
- Atualização do CHANGELOG

---

# Convenções

Todo código deve ser organizado em componentes.

Evitar arquivos grandes.

Separar interface, lógica e estilos.

Documentar decisões importantes em DECISOES.md.

Atualizar ROADMAP quando novas funcionalidades forem planejadas.

---

# Situação Atual

Sprint 001

Status:
Em desenvolvimento.

Estrutura inicial criada.

React + Vite funcionando.

Documentação criada.

Próxima etapa:

Construção do Layout principal do HUB de Controladoria.