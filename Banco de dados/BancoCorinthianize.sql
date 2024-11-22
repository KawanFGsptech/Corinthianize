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

select * from Usuario;