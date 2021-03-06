
    create table tb_artigo (
       id int8 generated by default as identity,
        contador int4,
        conteudo varchar(1000),
        data_publicacao timestamp,
        status varchar(255),
        titulo varchar(255),
        url varchar(255),
        autor_id int8 not null,
        primary key (id)
    );

    create table tb_artigo_categoria (
       artigo_id int8 not null,
        categoria_id int8 not null,
        primary key (artigo_id, categoria_id)
    );

    create table tb_autor (
       id int8 generated by default as identity,
        biografia varchar(1000),
        email varchar(80) not null,
        foto varchar(255),
        nome varchar(50) not null,
        senha varchar(100) not null,
        usuario varchar(20) not null,
        primary key (id)
    );

    create table tb_autor_perfis (
       autor_id int8 not null,
        perfis_id int8 not null
    );

    create table tb_categoria (
       id int8 generated by default as identity,
        descricao varchar(80),
        nome varchar(50),
        primary key (id)
    );

    create table tb_comentario (
       id int8 generated by default as identity,
        data_hora timestamp,
        nome varchar(255) not null,
        texto varchar(255) not null,
        id_artigo_comment int8 not null,
        primary key (id)
    );

    create table tb_perfil (
       id int8 generated by default as identity,
        nome varchar(255),
        primary key (id)
    );

    create table tb_secao (
       id int4 generated by default as identity,
        nome varchar(255) not null,
        categoria_id int8 not null,
        primary key (id)
    );

    create table tb_tag (
       id int8 generated by default as identity,
        nome varchar(255),
        artigo_id int8 not null,
        primary key (id)
    );

    alter table if exists tb_artigo 
       add constraint FKi1l49drggyovk7dr0xl6x1cwd 
       foreign key (autor_id) 
       references tb_autor;

    alter table if exists tb_artigo_categoria 
       add constraint FKn11ru28mowke93k28xvur4nox 
       foreign key (categoria_id) 
       references tb_categoria;

    alter table if exists tb_artigo_categoria 
       add constraint FKimbry6a0421kquhqan90aoi5 
       foreign key (artigo_id) 
       references tb_artigo;

    alter table if exists tb_autor_perfis 
       add constraint FK8lc4lsism5pynp5a55rke05w 
       foreign key (perfis_id) 
       references tb_perfil;

    alter table if exists tb_autor_perfis 
       add constraint FKd7hf1i02qrytk873wl4o87mv9 
       foreign key (autor_id) 
       references tb_autor;

    alter table if exists tb_comentario 
       add constraint FKm23o5keplpeqrxbweym9cqxey 
       foreign key (id_artigo_comment) 
       references tb_artigo;

    alter table if exists tb_secao 
       add constraint FK2cmxjjhk16xu3st9smitj0lol 
       foreign key (categoria_id) 
       references tb_categoria;

    alter table if exists tb_tag 
       add constraint FKai2freunsrnq3j8ks9ncnwpor 
       foreign key (artigo_id) 
       references tb_artigo;
