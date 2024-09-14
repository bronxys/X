#!/bin/bash

# @jefferson_ddos ☕
VERDE='\033[0;32m'
CIANO='\033[0;36m'
VERMELHO='\033[0;31m'
NC='\033[0m'


clear
echo

echo "${CIANO}"
figlet -f slant "CONEXAO"
echo "${NC}"
echo "${VERMELHO}X-BOT - ${VERDE}Auto reconexão ativada para prevenção de quedas.."
echo
echo

echo "${CIANO}Escolha uma opção para iniciar:"
echo
echo "${VERDE}『 1 』- Iniciar com QR code"
echo "${VERDE}『 2 』- Iniciar com código de pareamento"
echo
echo "${CIANO}Escolha uma Opção: ${NC}"
echo -n " ➥ "

while true; do
    read opcao

    case $opcao in
        1)
            clear
            echo
            echo "${VERDE}Iniciando com QR code..."
            while true
            do
                node iniciar.js
                echo "${CIANO}Reiniciando com sh start.sh..."
                sleep 1
                sh start.sh
            done
            ;;
        2)
            clear
            echo
            echo "${VERDE}Iniciando com código de pareamento..."
            while true
            do
                node iniciar -code
                echo "${CIANO}Reiniciando com sh start.sh..."
                sleep 1
                sh start.sh
            done
            ;;
        *)
            echo "${VERMELHO}Opção inválida. Por favor, escolha uma opção válida.${NC}"
            echo -n " ➥ "
            ;;
    esac
done