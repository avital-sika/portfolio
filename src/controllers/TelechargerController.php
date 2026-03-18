<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

class DownloadController extends AbstractController
{
    #[Route('/download/cv', name: 'download_cv')]
    public function downloadCv(): BinaryFileResponse
    {
        // Chemin vers ton CV dans le dossier public/
        $filePath = $this->getParameter('kernel.project_dir') . '/public/files/cv.pdf';

        $response = new BinaryFileResponse($filePath);
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            'cv-avital-SIKA-developpeuse'
        );

        return $response;
    }
}
