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
    posicao varchar(45),
    qtd int default 0 
);

insert into Votos (jogador, posicao) values
	('Longo', 'goleiro'),
    ('Hugo Souza', 'goleiro'),
    ('Donelli', 'goleiro'),
    ('Ramalho', 'zagueiro'),
    ('Cacá', 'zagueiro'),
    ('Félix', 'zagueiro'),
    ('GH', 'zagueiro'),
    ('Caetano', 'zagueiro'),
    ('Palacios', 'lateral'),
    ('Hugo', 'lateral'),
    ('Matheuzinho', 'lateral'),
    ('Fagner', 'lateral'),
    ('Bidu', 'lateral'),
    ('Santana', 'meia'),
    ('Carrillo', 'meia'),
    ('Bidon', 'meia'),
    ('Charles', 'meia'),
    ('Martínez', 'meia'),
    ('Ryan', 'meia'),
    ('Maycon', 'meia'),
    ('Raniele', 'meia'),
    ('Coronado', 'meia'),
    ('Araújo', 'meia'),
    ('Garro', 'meia'),
    ('Ruan', 'meia'),
    ('Giovane', 'atacante'),
    ('Héctor', 'atacante'),
    ('Memphis', 'atacante'),
    ('P Henrique', 'atacante'),
    ('P Raul', 'atacante'),
    ('Romero', 'atacante'),
    ('Talles', 'atacante'),
    ('Yuri', 'atacante');

select * from Usuario;

select * from ResultadoQuiz;

select * from Votos;

select u.nome, r.resultado from Usuario as u join ResultadoQuiz as r on fkUsuario = idUsuario;

update Votos set qtd = 0 where id in (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33);