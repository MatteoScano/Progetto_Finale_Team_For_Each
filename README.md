# Progetto_Finale_Team_For_Each
Progetto Finale TNV 4 Edizione


*** DESCRIZIONE PROGETTO ***

Interfaccia di un sito che giorno dopo giorno suggerisca un film da guardare sulla base di dati presi da un’API metereologica. 

Si stabiliscano dei criteri (es. se il tempo è nuvoloso suggerisco un film thriller) sulla base del meteo ma anche di altri fattori, come l’orario: esempio: ora di tramonto -> suggerisco un film romantico.
Implementare un sistema di login e registrazione senza l’utilizzo dei pacchetti npm.
Ogni utente può aggiungere un film che è stato suggerito dall’interfaccia al suo elenco di film visti o da vedere.

Il progetto finale deve garantire tutte le funzionalità dell’applicazione CRUD implementata durante il corso. In aggiunta devono essere implementate le seguenti funzionalità comuni:
login attraverso l’utilizzo del servizio di BE in Springbooot sviluppato da Dino;
l’aggiunta di commenti realizzata attraverso il servizio di BE in .Net sviluppato da Stefano;
l’aggiunta della votazione realizzata attraverso il servizio di BE in Laravel sviluppato da Alessandro;



*** SETTAGGIO ***

Installazione dei Database Models relativi alle principali funzionalità dell´applicazione: Sezione login e registrazione, sezione commenti, sezione rating, sezione liste utente. Per maggiori dettagli vedi Readme di ogni sezione nelle rispettive cartelle.


Lanciare MAMP per attivare i database.

Lanciare i framework utili a far partire l`applicazione:
Per i commenti: Cartella DotNet_Commenti / FilmComments.RestAPIs, lanciare da terminale 

    dotnet run
    
Per login e registrazione Lanciare Springboot_Login da IntelliJ con run 
Per i rating: Cartella Laravel_Movie_Rating in Visual Studio Code, inizializzare Laravel e lanciare da terminale:

    composer install

    php artisan serve

Ora aprire cartella Angular_Frontend in Visual Studio Code e lanciare da terminale integrato entrambe le cartelle Backend e Frontend col seguente comando:

npm start

Buona visione!



