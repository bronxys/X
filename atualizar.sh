#!/bin/bash

# script de atualizar o X-bot sem apagar os dados do Dono. escrito por @jefferson_ddos
#
# Corzinhas kk
GREEN="\e[32m"
RED="\e[31m"
RESET="\e[0m"

verificar_instalar_pacotes() {
    if command -v pkg &> /dev/null; then
        
        for pacote in "$@"; do
            if ! command -v "$pacote" &> /dev/null; then
                echo -e "${RED}Pacote $pacote não encontrado no Termux.${RESET}"
                echo -e "${GREEN}Instalando $pacote...${RESET}"
                pkg install -y "$pacote"
            else
                echo -e "${GREEN}Pacote $pacote já está instalado no Termux.${RESET}"
            fi
        done
    else
        
        for pacote in "$@"; do
            if ! dpkg -l | grep -q "$pacote"; then
                echo -e "${RED}Pacote $pacote não encontrado.${RESET}"
                echo -e "${GREEN}Instalando $pacote...${RESET}"
                sudo apt-get update && sudo apt-get install -y "$pacote"
            else
                echo -e "${GREEN}Pacote $pacote já está instalado no VPS.${RESET}"
            fi
        done
    fi
}

echo -e "${GREEN}Verificando pacotes necessários...${RESET}"
verificar_instalar_pacotes zip git


echo -e "${GREEN}Compactando a pasta DADOS${RESET}"
zip -r DADOS.zip DADOS

if [ -f "DADOS.zip" ]; then
    echo -e "${GREEN}Arquivo DADOS.zip criado com sucesso${RESET}"
    echo -e "${GREEN}Removendo todas as pastas e arquivos, exceto o arquivo compactado${RESET}"
    
    # Remove tudo, exceto o arquivo DADOS.zip
    find . -maxdepth 1 ! -name "DADOS.zip" -exec rm -rf {} \;
    
    echo -e "${GREEN}Clonando o repositório do X-BOT${RESET}"
    git clone https://github.com/bronxys/X.git
    
    mv X/* . && rm -rf X
    
    echo -e "${GREEN}Extraindo o arquivo DADOS.zip${RESET}"
    unzip -o DADOS.zip -d . && \
    echo -e "${GREEN}Removendo o arquivo DADOS.zip${RESET}" && \
    rm DADOS.zip && \
    echo -e "${GREEN}X-BOT Atualizado com sucesso para a nova versão mantendo seus Dados ^-^${RESET}"
else
    echo -e "${RED}Falha ao criar o arquivo ZIP. O script será encerrado.${RESET}"
    exit 1
fi
