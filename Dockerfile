# Usar a imagem oficial e leve do Nginx
FROM nginx:stable-alpine

# Copiar todo o conteúdo da pasta atual (index.html, assets/, etc.) 
# para a pasta padrão que o Nginx usa para servir sites.
COPY . /usr/share/nginx/html

# O Nginx já é configurado para escutar na porta 80 por padrão,
# então não precisamos de mais nenhuma configuração.
