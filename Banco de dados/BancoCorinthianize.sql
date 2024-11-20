create database Corinthianize;
use Corinthianize;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
nick  varchar(45),
email varchar(45),
senha varchar(45)
);

create table Jogador (
idJogador int primary key auto_increment,
nome varchar(45),
posicao varchar(45)
);

create table Voto (
fkUsuario int,
fkJogador int,
constraint pkComposta primary key (fkUsuario, fkJogador),
constraint fkUsuarioVoto foreign key (fkUsuario) references Usuario (idUsuario),
constraint fkJogadorVoto foreign key (fkJogador) references Jogador (idJogador)
);

create table ResultadoQuiz (
idResultadoQuiz int primary key auto_increment,
Resultado int,
fkUsuario int,
constraint fkUsuarioResultado foreign key (fkUsuario) references Usuario (idUsuario)
);

insert into Jogador (nome, posicao) values
	('Felipe Longo', 'Goleiro'),
    ('Hugo Souza', 'Goleiro'),
    ('Matheus Donelli', 'Goleiro'),
    ('André Ramalho', 'Zagueiro'),
    ('Cacá', 'Zagueiro'),
    ('Félix Torres', 'Zagueiro'),
    ('Gustavo Henrique', 'Zagueiro'),
    ('Caetano', 'Zagueiro'),
    ('Diego Palacios', 'Lateral'),
    ('Hugo', 'Lateral'),
    ('Matheuzinho', 'Lateral'),
    ('Fagner', 'Lateral'),
    ('Matheus Bidu', 'Lateral'),
    ('Alex Santana', 'Meia'),
    ('André Carrillo', 'Meia'),
    ('Breno Bidon', 'Meia'),
    ('Charles', 'Meia'),
    ('José Martínez', 'Meia'),
    ('Ryan', 'Meia'),
    ('Maycon', 'Meia'),
    ('Raniele', 'Meia'),
    ('Igor Coronado', 'Meia'),
    ('Matheus Araújo', 'Meia'),
    ('Rodrigo Garro', 'Ruan Oliveira'),
    ('Giovane', 'Atacante'),
    ('Héctor Hernández', 'Atacante'),
    ('Memphis', 'Atacante'),
    ('Pedro Henrique', 'Atacante'),
    ('Pedro Raul', 'Atacante'),
    ('Romero', 'Atacante'),
    ('Talles Magno', 'Atacante'),
    ('Yuri Alberto', 'Atacante');


select * from Usuario;