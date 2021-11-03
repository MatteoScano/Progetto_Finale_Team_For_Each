Aprire Visual Studio Code
Creare un database con codifica utf8_unicode_ci  e nome movie 
Andare nella sezione SQL e lanciare i seguenti comandi: 
    
    CREATE TABLE `failed_jobs` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `uuid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `connection` text COLLATE utf8_unicode_ci NOT NULL,
    `queue` text COLLATE utf8_unicode_ci NOT NULL,
    `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
    `exception` longtext COLLATE utf8_unicode_ci NOT NULL,
    `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


    CREATE TABLE `migrations` (
    `id` int(10) UNSIGNED NOT NULL,
    `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `batch` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

    INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
    (1, '2014_10_12_000000_create_users_table', 1),
    (2, '2014_10_12_100000_create_password_resets_table', 1),
    (3, '2019_08_19_000000_create_failed_jobs_table', 1),
    (4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
    (5, '2021_09_07_123925_create_movies_table', 1),
    (6, '2021_08_05_073149_create_movie_ratings_table', 2);

    CREATE TABLE `movies` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `movie_rating` int(11) NOT NULL,
    `movie_id` int(10) UNSIGNED NOT NULL,
    `user_id` int(10) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

    INSERT INTO `movies` (`id`, `movie_rating`, `movie_id`, `user_id`, `created_at`, `updated_at`) VALUES
    (1, 5, 6, 6, '2021-09-07 09:55:29', '2021-09-07 09:55:29'),
    (2, 5, 7, 1, '2021-09-07 09:55:29', '2021-09-07 09:55:29');


    CREATE TABLE `movie_ratings` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `movie_rating` int(11) NOT NULL,
    `user_id` int(10) UNSIGNED NOT NULL,
    `movie_id` int(10) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
    
    
    
 Lanciare da terminale integrato il comando:
    
        composer install
    
        php artisan serve
    
    
    

    


