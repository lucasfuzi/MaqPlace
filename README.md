# HotelSys — Sistema de Gestão Hoteleira

Aplicação web para o Hotel SENAI Palace usando **XAMPP + PHP + MySQL + HTML/CSS/JavaScript**.

## Execução local

1. Coloque esta pasta dentro de `C:/xampp/htdocs/hotelsys`.
2. Inicie Apache e MySQL no XAMPP.
3. Importe `database/hotelsys.sql` no phpMyAdmin.
4. Abra `http://localhost/hotelsys/`.
5. Login demo: `admin@senai.br` / `123456`.

A documentação completa de requisitos, infraestrutura e DER está em [`docs/requisitos.md`](docs/requisitos.md).

## Funcionalidades

- Login com sessão e senha usando hash.
- Dashboard com indicadores operacionais.
- Listagem e filtro de reservas, quartos e hóspedes.
- Formulário de criação de reserva.
- Banco de dados relacional com usuários, hóspedes, quartos, reservas e hospedagens.
- Interface responsiva para desktop e dispositivos móveis.
