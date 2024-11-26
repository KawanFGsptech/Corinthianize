create database Corinthianize;
use Corinthianize;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
nick  varchar(45),
email varchar(45),
senha varchar(45)
);

create table ResultadoQuiz (
idResultadoQuiz int primary key auto_increment,
Resultado int,
fkUsuario int,
constraint fkUsuarioResultado foreign key (fkUsuario) references Usuario (idUsuario)
);

create table Votos (
    id int primary key auto_increment,
    jogador varchar(45),
    qtd int default 0 
);

insert into Votos (jogador) values
	('Longo'),
    ('Hugo Souza'),
    ('Donelli'),
    ('Ramalho'),
    ('Cacá'),
    ('Félix'),
    ('GH'),
    ('Caetano'),
    ('Palacios'),
    ('Hugo'),
    ('Matheuzinho'),
    ('Fagner'),
    ('Bidu'),
    ('Santana'),
    ('Carrillo'),
    ('Bidon'),
    ('Charles'),
    ('Martínez'),
    ('Ryan'),
    ('Maycon'),
    ('Raniele'),
    ('Coronado'),
    ('Araújo'),
    ('Garro'),
    ('Ruan'),
    ('Giovane'),
    ('Héctor'),
    ('Memphis'),
    ('P Henrique'),
    ('P Raul'),
    ('Romero'),
    ('Talles'),
    ('Yuri');

select * from Usuario;

select * from ResultadoQuiz;

select * from Votos;

select u.nome, r.resultado from Usuario as u join ResultadoQuiz as r on fkUsuario = idUsuario;