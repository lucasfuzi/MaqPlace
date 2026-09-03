<?php
// Configuração padrão para XAMPP. Ajuste apenas se suas credenciais forem diferentes.
const DB_HOST = 'localhost';
const DB_NAME = 'hotelsys';
const DB_USER = 'root';
const DB_PASS = '';

function db(): ?PDO {
    static $pdo = null;
    if ($pdo instanceof PDO) return $pdo;
    try {
        $pdo = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8mb4', DB_USER, DB_PASS, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
        return $pdo;
    } catch (PDOException $e) { return null; }
}
function db_value(string $sql, array $params=[]): mixed { $pdo=db(); if (!$pdo) return null; $s=$pdo->prepare($sql); $s->execute($params); return $s->fetchColumn(); }
function db_one(string $sql, array $params=[]): ?array { $pdo=db(); if (!$pdo) return null; $s=$pdo->prepare($sql); $s->execute($params); return $s->fetch() ?: null; }
function db_all(string $sql, array $params=[]): array { $pdo=db(); if (!$pdo) return []; $s=$pdo->prepare($sql); $s->execute($params); return $s->fetchAll(); }
?>
