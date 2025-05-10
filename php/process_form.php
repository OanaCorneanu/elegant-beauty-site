
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metoda neacceptată']);
    exit;
}

if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Toate câmpurile sunt obligatorii']);
    exit;
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresa de email nu este validă']);
    exit;
}

http_response_code(200);
echo json_encode([
    'success' => true, 
    'message' => 'Mesajul a fost trimis cu succes!'
]);
?>
