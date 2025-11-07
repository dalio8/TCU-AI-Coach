# COMPUTAÇÃO EM NUVEM – Resumo de Revisão TCU/Cebraspe

---

## 1️⃣ MAPA 80/20 DOS TÓPICOS CRÍTICOS

**Os 12 conceitos que respondem por ~80% dos acertos. Priorize absolutamente:**

| # | Tópico | Por que cai tanto?
|-----|-----|-----
| 1 | **IAM, RBAC e Princípio do Menor Privilégio** | Cebraspe explora diferenças sutis entre IAM (identidade), RBAC (acesso baseado em role) e confunde MFA com autenticação. Pegadinha recorrente.
| 2 | **TLS em Trânsito vs KMS em Repouso** | Distinção absoluta. Questões cobram quando usar cada um, e erro aqui = penalização.
| 3 | **IaaS vs PaaS vs SaaS + Responsabilidade (Shared Responsibility)** | Definidor de escopo e controle. Cebraspe pergunta "quem gerencia o quê". Absoluto.
| 4 | **Nuvem Pública vs Privada vs Híbrida + Soberania de Dados** | Em contexto TCU/governo federal: híbrida e soberana são recorrentes. Confusão entre elas = erros.
| 5 | **Elasticidade vs Escalabilidade** | Armadilha clássica. Elasticidade = dinâmica/automática; escalabilidade = capacidade. Pegadinha de definição.
| 6 | **VPC, Subredes, Grupos de Segurança e Segmentação** | Base de segurança de rede. Cebraspe cobra lógica de camadas e isolamento.
| 7 | **Zero Trust Architecture** | Padrão moderno, entra em provas recentes. Conceito: nunca confie, sempre valide.
| 8 | **Containers (Docker) vs Kubernetes vs Serverless** | Arquitetura moderna. Diferenças em controle, custo e complexidade operacional.
| 9 | **Estratégias de Migração (Lift & Shift, Replatform, Refactor, Repurchase)** | Contexto TCU = modernização. Cada estratégia tem trade-offs.
| 10 | **Governança: Tagging, Cotas, Limites e FinOps** | Governança + custos = foco setor público. ISO 27001, NIST 800-53, LGPD cobrados em contexto.
| 11 | **Armazenamento: Objetos (S3) vs Blocos (EBS) vs Arquivos (EFS)** | Diferenças definidoras em latência, custo, uso. Questões "qual usar?" muito frequentes.
| 12 | **Multicloud vs Híbrida + Arquitetura Distribuída Resiliente** | Desenho para resiliência, falhas, e ausência de vendor lock-in. Padrões de distribuição.


**⚠️ Nota crítica:** Cebraspe adora termos absolutos ("sempre", "nunca", "obrigatório") e exceções. Qualquer "sem exceção" pode ser pegadinha.

---

## 2️⃣ RESUMO EXECUTIVO (Princípios-Força)

### **Pilares Recorrentes em Questões C/E:**

**Identidade, Acesso e Confiança**

- IAM é sobre *quem* (identidade); RBAC é sobre *permissões de quem*; MFA é sobre *comprovação*.
- Zero Trust: valide tudo, sempre, independentemente de estar "dentro" ou "fora".
- Princípio do Menor Privilégio: garanta apenas o necessário, nada mais.


**Segurança em Camadas (Defense in Depth)**

- Criptografia em trânsito (TLS) protege dados enquanto se movem.
- Criptografia em repouso (KMS) protege dados armazenados.
- Rede: VPC → Subredes → Grupos de Segurança (firewall stateful).
- Aplicação: autenticação, autorização, auditoria.


**Responsabilidade Compartilhada (Shared Responsibility Model)**

- Provedor: infraestrutura, virtualização, segurança física.
- Cliente: dados, acesso, configuração, aplicação.
- Escopo muda por modelo:

- **IaaS**: cliente controla SO, aplicação, dados.
- **PaaS**: provedor gerencia ambiente, cliente deploy + dados.
- **SaaS**: provedor gerencia tudo, cliente apenas usa.





**Elasticidade ≠ Escalabilidade**

- **Elasticidade**: capacidade de *crescer/encolher automaticamente* em resposta à demanda (minutos/segundos).
- **Escalabilidade**: capacidade de *suportar aumento* de carga (horas/dias).


**Resiliência = Design para Falhas**

- Multi-AZ (Availability Zone): replica em zonas diferentes.
- Auto Scaling: ajusta capacidade automaticamente.
- Load Balancing: distribui tráfego.
- Tolerância a falha: sistema continua operando mesmo com componentes falhando.


**Governança = Controle + Custo + Conformidade**

- Tagging: rotular recursos para rastrear, otimizar, auditar.
- Cotas e Limites: impedir gastos inesperados e abuso.
- FinOps: otimizar gastos em nuvem continuamente.
- Conformidade: ISO 27001 (segurança), NIST 800-53 (federal EUA), LGPD (dados pessoais Brasil).


---

## 3️⃣ COMPARATIVOS-CHAVE EM TABELA

### **IaaS vs PaaS vs SaaS**

| Aspecto | IaaS | PaaS | SaaS
|-----|-----|-----
| **O que você controla** | Aplicação, dados, SO, runtime | Aplicação, dados | Nada (apenas usa)
| **O que o provedor gerencia** | Infraestrutura, rede, armazenamento | Infraestrutura + plataforma/middleware | Tudo
| **Exemplos** | AWS EC2, Azure VMs, GCP Compute Engine | AWS Lambda, Azure App Service, Google Cloud Run | Microsoft 365, Salesforce, Google Workspace
| **Flexibilidade** | Alta | Média | Baixa
| **Custo inicial** | Maior (gerenciar tudo) | Menor | Menor
| **Segurança (responsabilidade)** | Compartilhada, mas cliente faz mais | Compartilhada, provedor faz mais | Provedor responsável
| **Ideal para** | Migração (Lift & Shift), controle total | Desenvolvimento rápido, reduzir ops | SaaS puro, sem customização profunda


---

### **Nuvem Pública vs Privada vs Híbrida**

| Aspecto | Pública | Privada | Híbrida
|-----|-----|-----
| **Acesso** | Múltiplos clientes, compartilhado | Dedicada a uma organização | Combinação: público + privado
| **Segurança** | Responsabilidade compartilhada rigorosa | Maior controle, físico local possível | Complexa, requer integração segura
| **Custo** | OPEX (pague pelo uso) | CAPEX alto, OPEX moderado | Ambos (maior complexidade = maior custo)
| **Escalabilidade** | Ilimitada, sob demanda | Limitada à infraestrutura interna | Escalável via público, mais governável
| **Conformidade/Soberania** | Mais desafiador (dados podem estar em múltiplos países) | Controle total (pode estar on-premises) | Possível se nuvem privada on-premises
| **Ideal para** | Startups, variabilidade alta, crescimento rápido | Setor público, dados sensíveis, audit rigoroso | Transição, regulamentação, modernização gradual


**⚠️ Pegadinha Cebraspe:** "Nuvem privada = on-premises"? **NÃO**. Nuvem privada pode estar em data center alugado. A diferença é *dedicação* (só um cliente) vs *localização*.

---

### **Armazenamento: Objetos vs Blocos vs Arquivos**

| Aspecto | Objetos (S3, GCS) | Blocos (EBS, Azure Disk) | Arquivos (EFS, Azure Files)
|-----|-----|-----
| **Estrutura** | Chave-valor, sem hierarquia | Volumes de disco tradicionais | Compartilhamento de rede (NFS/SMB)
| **Latência** | Segundos a minutos | Milissegundos (muito baixa) | Milissegundos, mas com overhead de rede
| **Escalabilidade** | Ilimitada (teoricamente) | Limitada por VM | Escalável, múltiplos acessos
| **Caso de uso** | Data lakes, backups, logs, Big Data | Bancos de dados, caches, SO | Compartilhamento entre múltiplas VMs
| **Custo** | Baixo (especialmente frio/archive) | Médio (ligado a VM) | Médio-alto (pagamento por uso + compartilhado)
| **Acesso** | HTTP/S, SDK | Bloco de disco (monta como partição) | Protocolo de arquivo (SMB/NFS)


---

### **Serverless vs Containers vs Kubernetes**

| Aspecto | Serverless | Containers (Docker) | Kubernetes (K8s)
|-----|-----|-----
| **Quem gerencia infra** | Provedor (abstrato) | Você (a imagem em host) | Você (orquestração) + provedor (cluster)
| **Custo** | Pague por execução (granular) | Pague por instância/host | Pague por nós + overhead de orquestração
| **Escalabilidade** | Automática, quase infinita | Manual ou via auto-scaling | Automática (via HPA, CPA)
| **Latência de cold start** | Pode ter (segundos) | Mínima (ms) | Mínima (ms)
| **Ideal para** | APIs, webhooks, processamento em lote | Aplicações monolíticas, microserviços | Microserviços complexos, multi-tenant
| **Vendor lock-in** | Alto (Functions do provedor) | Baixo (Docker é padrão) | Baixíssimo (K8s é agnóstico)
| **Exemplo** | AWS Lambda, GCP Functions, Azure Functions | AWS ECS, Azure Container Instances, self-managed | EKS (AWS), AKS (Azure), GKE (Google)


---

### **IAM vs RBAC**

| Aspecto | IAM | RBAC
|-----|-----|-----
| **O que é** | Identity & Access Management – controla *quem* acessa | Role-Based Access Control – controla *o que* cada role pode fazer
| **Objetivo** | Gerenciar identidades (usuários, serviços, grupos) e autenticação | Controlar permissões baseadas em funções
| **Exemplo** | Criar usuário "alice", federar com AD/Okta, ativar MFA | Role "Desenvolvedor" tem `s3:GetObject` e `ec2:DescribeInstances`
| **Relação** | IAM é o guarda-chuva; RBAC é um modelo dentro de IAM | Complementar
| **Alternativa a RBAC** | ABAC (Attribute-Based Access Control) – controla por atributos (projeto, ambiente, custo)


---

### **VPN Site-to-Site vs Direct Connect vs ExpressRoute**

| Aspecto | VPN Site-to-Site | Direct Connect (AWS) / ExpressRoute (Azure)
|-----|-----|-----
| **O que é** | Túnel criptografado IP sobre internet | Conexão dedicada (ponto-a-ponto) via provedor telecom
| **Latência** | Variável (depende internet) | Consistente (< 1 ms)
| **Throughput** | Limitado (segue velocidade internet) | Até 100 Gbps (muito maior)
| **Criptografia** | IPSec/TLS nativa | Não criptografada por padrão (provedor cuida)
| **Custo** | Baixo (usa internet) | Alto (tarifa mensal + setup)
| **Setup** | Rápido (horas) | Lento (semanas, coordenação telecom)
| **Redundância** | Fácil (múltiplos túneis) | Mais complexa (múltiplas conexões)
| **Ideal para** | Prototipagem, baixo volume, failover | Produção, dados sensíveis, tráfego alto


**🔁 Recorrência:** Cebraspe testa diferenças e "quando escolher" – lembre que Direct Connect é mais para segurança + volume; VPN é para simplicidade + custo.

---

### **TLS em Trânsito vs KMS em Repouso**

| Aspecto | TLS em Trânsito | KMS em Repouso
|-----|-----|-----
| **O que protege** | Dados enquanto se movem (rede) | Dados em armazenamento (disco, banco)
| **Mecanismo** | Criptografia end-to-end (cliente → servidor) | Chaves gerenciadas (Key Management Service)
| **Implementação** | HTTPS, SSL/TLS obrigatório | Algoritmo AES-256, key rotation, acesso controlado
| **Quando falha** | Se não usar TLS ou certificado inválido | Se chaves forem expostas ou políticas mal configuradas
| **Custo** | Praticamente zero (padrão moderno) | Custo por chave + operações criptográficas
| **Obrigatoriedade** | Sim (conformidade moderna) | Sim (dados sensíveis)


**⚠️ Pegadinha:** "Usar TLS garante que dados são seguros em repouso"? **ERRADO**. TLS só protege em trânsito. Repouso exige criptografia local (KMS).

---

### **Multicloud vs Híbrida**

| Aspecto | Multicloud | Híbrida
|-----|-----|-----
| **Definição** | Múltiplos provedores de nuvem (públicos ou privados) | Combinação nuvem pública + privada/on-premises
| **Objetivo** | Evitar vendor lock-in, redundância geográfica, resiliência | Compliance, transição gradual, dados sensíveis on-premises
| **Complexidade** | Muito alta (múltiplas APIs, tooling) | Alta (integração segura entre ambientes)
| **Governança** | Desafiador (standards diferentes) | Centralizado (um controle)
| **Exemplo** | App roda em AWS + GCP + Azure | App roda em Azure público + data center privado on-premises
| **Trade-off** | Flexibilidade vs complexidade operacional | Controle vs custo (ambos lados)


---

## 4️⃣ CHECKLISTS DE ARQUITETURA E SEGURANÇA

### **✅ Alta Disponibilidade & Resiliência**

- **Multi-AZ ou Multi-Região**: Replicação em pelo menos 2 zonas de disponibilidade (mínimo) ou regiões geográficas diferentes.
- **Auto Scaling**: Política definida (scale-out horizontalmente, não apenas scale-up vertical).
- **Load Balancer**: Distribuidor de tráfego antes da aplicação (health checks contínuos).
- **Graceful Degradation**: Aplicação funciona parcialmente se componentes falham.
- **Circuit Breaker**: Padrão para isolar falhas e evitar cascata.
- **Backup & RTO/RPO**: Backups automatizados, RTO (tempo para recuperar) e RPO (dados perdidos) definidos.
- **Failover Automático**: Comutação para standby sem intervenção manual.
- **Monitoramento Contínuo**: Alertas antes de falha (proativo).


### **🔐 Segmentação de Rede & Controle de Acesso**

- **VPC Isolada**: Cada ambiente (dev, staging, prod) em VPC separada.
- **Subnets Privadas**: Recursos sem IP público, acesso via NAT/Bastion.
- **Grupos de Segurança (Firewall Stateful)**: Ingress/Egress com regras explícitas, least privilege.
- **ACLs de Rede (Stateless)**: Camada adicional de firewall (opcional, mas padrão ISO 27001).
- **IAM/RBAC Mínimo**: Cada usuário/serviço com permissões precisas, nada mais.
- **MFA Obrigatório**: Especialmente admin, acesso sensível.
- **Logging de Acesso**: Quem acessou o quê, quando, de onde (auditoria).
- **VPN/Direct Connect**: Comunicação segura entre on-premises e nuvem.


### **🔒 Criptografia em Trânsito & Repouso**

- **TLS 1.2+**: Todos endpoints HTTPS, certificados válidos, sem downgrade.
- **KMS Central**: Gerenciamento de chaves centralizado, rotação automática (anual mínimo).
- **Envelope Encryption**: Criptografia de dados + chaves também criptografadas.
- **Dados em Repouso**: Objetos, blocos, bancos com AES-256 habilitado.
- **Secrets Management**: Senhas, tokens em vault (não em código), rotação automática.
- **Certificados SSL/TLS**: Renovação automática, sem expiração.


### **📊 Governança & Conformidade**

- **Tagging Mandatório**: `Ambiente`, `Projeto`, `Custo-Center`, `Proprietário`, `Conformidade`.
- **Cotas & Limites**: Definidos por ambiente, alertas de proximidade.
- **Resource Groups/Organizações**: Isolamento lógico, permissions por grupo.
- **FinOps**: Dashboard de custos, otimização contínua (right-sizing, reserved instances, spot).
- **Logging Centralizado**: CloudWatch, Stackdriver, Azure Monitor, todos os recursos.
- **Auditoria**: Quem mudou o quê, quando (API calls logged).
- **Conformidade Automatizada**: Verificações ISO 27001, NIST 800-53, LGPD (policies as code).
- **Data Residency**: Dados sensíveis no Brasil (LGPD), regiões específicas.


---

## 5️⃣ PADRÕES & ANTIPADRÕES

### **✅ BOAS PRÁTICAS (Cebraspe favorece)**

**Padrão: Princípio do Menor Privilégio (Least Privilege)**

- Role: conceder exatamente o necessário, revogar o resto.
- Benefício: reduz superfície de ataque, facilita auditoria.
- Exemplo: Desenvolvedor tem `s3:GetObject` em bucket específico, não `s3:*`.


**Padrão: Defense in Depth**

- Múltiplas camadas de controle (rede, identidade, aplicação, dados).
- Se uma camada falha, outras continuam protegendo.
- Exemplo: VPC + Security Group + WAF + Rate Limiting + Autenticação + Criptografia.


**Padrão: Design for Failure (Resiliente)**

- Assume que componentes podem falhar; desenhe sistema para continuar operando.
- Use Multi-AZ, Circuit Breaker, Retry com Backoff, Dead Letter Queue.
- Exemplo: Lambda invoca SQS, se SNS falha, SQS reprocessa depois.


**Padrão: Infrastructure as Code (IaC)**

- Toda infraestrutura como código (Terraform, CloudFormation, Bicep).
- Versionable, reproduzível, auditável.
- Evita "cliques manuais" e deriva de configuração.


**Padrão: Observabilidade = Logs + Metrics + Traces**

- Logs estruturados (JSON), métricas com tags, distributed tracing.
- Permite troubleshooting rápido e correlação de eventos.


**Padrão: Zero Trust Architecture**

- Nunca confie, sempre valide (até dentro da rede).
- Autenticação + Autorização em cada acesso.
- Exemplo: Microsserviço A chama Microsserviço B via mTLS, nunca sem validar.


**Padrão: Tagging & Cost Attribution**

- Tags obrigatórias por recurso, coesivas com governança.
- Rastreabilidade financeira, chargeback preciso.


---

### **❌ ANTIPADRÕES (Cebraspe penaliza)**

**Antipadrão: Confiança Implícita (Perimeter-Based Security)**

- Erro: "Se está dentro da VPC, é seguro".
- Consequência: comprometimento interno não é detectado.
- ✅ Correto: Zero Trust (valide sempre).


**Antipadrão: Secrets em Código ou Configuração**

- Erro: Database password em arquivo `.env` ou GitHub.
- Consequência: exposição em logs, auditoria falha.
- ✅ Correto: Secrets Manager ou HashiCorp Vault.


**Antipadrão: Single Point of Failure**

- Erro: BD em uma AZ, sem replicação, sem backup.
- Consequência: falha = downtime total.
- ✅ Correto: Multi-AZ, backups automáticos, RTO/RPO definido.


**Antipadrão: Não Rotacionar Chaves**

- Erro: KMS key criada em 2020, nunca rodada.
- Consequência: risco de comprometimento prolongado.
- ✅ Correto: Rotação automática anual (KMS policy).


**Antipadrão: Over-Permissioning (admin everywhere)**

- Erro: "Todo desenvolvedor tem acesso de admin na prod".
- Consequência: risco operacional, erro humano, auditoria falha.
- ✅ Correto: Least privilege, segregação de duty.


**Antipadrão: Ignoring Costs (FinOps)**

- Erro: "Infraestrutura rodando 24/7 em prod + dev + staging".
- Consequência: bill inesperado, desperdício.
- ✅ Correto: Auto-scaling, shutdowns, right-sizing, reserved instances.


**Antipadrão: Monolito sem Fallback**

- Erro: Uma aplicação monolítica roda tudo; falha = tudo cai.
- Consequência: downtime total.
- ✅ Correto: Microsserviços + Circuit Breaker + Graceful Degradation.


**Antipadrão: Dados sem Classificação**

- Erro: "Todos dados são iguais, trata igual".
- Consequência: conformidade falha (LGPD exige proteção proporcional).
- ✅ Correto: Classificar (público, interno, confidencial), aplicar proteção correspondente.


---

## 6️⃣ BANCO DE ASSERTIVAS CEBRASPE (C/E)

**Instruções:** Para cada item, identifique Certo (C) ou Errado (E). Gabarito e justificativa abaixo.

---

### **Bloco 1: Conceitos Fundamentais**

**1.** "IaaS, PaaS e SaaS diferem apenas na quantidade de recursos fornecidos pelo provedor."

- **Gabarito:** E
- **Justificativa:** Diferem no *escopo de responsabilidade*, não apenas quantidade. IaaS = infraestrutura (cliente controla SO); PaaS = plataforma (middleware gerenciado); SaaS = software (tudo gerenciado). É qualitativo, não quantitativo.


**2.** "Em um modelo SaaS, o cliente é responsável pela segurança dos dados armazenados."

- **Gabarito:** C
- **Justificativa:** Mesmo em SaaS, cliente é responsável por dados (o quê armazenar, quem acessa, conformidade). Provedor é responsável por infraestrutura/plataforma.


**3.** "Elasticidade significa a capacidade de crescer indefinidamente sem perda de performance."

- **Gabarito:** E
- **Justificativa:** Elasticidade é capacidade de *ajustar* (crescer/encolher) *automaticamente*. Não garante performance (depende aplicação) nem é infinita (há limites de quota).


**4.** "Escalabilidade horizontal (scale-out) é sempre preferível a escalabilidade vertical (scale-up)."

- **Gabarito:** E
- **Justificativa:** Ambas têm lugar. Horizontal é melhor para alta disponibilidade; vertical é simples para não-crítico. Depende caso de uso.


**5.** "Nuvem privada exige que a infraestrutura esteja física e geograficamente on-premises."

- **Gabarito:** E
- **Justificativa:** Nuvem privada = dedicada a um cliente, não significa on-premises. Pode estar em data center alugado. A diferença é *dedicação*, não *localização*.


---

### **Bloco 2: Segurança & IAM**

**6.** "MFA (Multi-Factor Authentication) e autenticação por senha são equivalentes em termos de segurança."

- **Gabarito:** E
- **Justificativa:** MFA = múltiplos fatores (algo que sabe, algo que tem, algo que é). Senha simples = um fator. MFA é significativamente mais seguro.


**7.** "Um usuário com permissão IAM `s3:*` em um bucket específico consegue deletar o bucket."

- **Gabarito:** C
- **Justificativa:** `s3:*` inclui `s3:DeleteBucket`. Permissão específica em resource `arn:aws:s3:::bucket-name` permite ação sobre aquele bucket.


**8.** "RBAC (Role-Based Access Control) é um mecanismo que controla quem pode acessar um sistema."

- **Gabarito:** E (em contexto técnico rigoroso)
- **Justificativa:** Mais preciso: RBAC controla *o que* cada role pode fazer (permissões). IAM controla *quem* acessa (identidade). Resposta depende interpretação, mas tecnicamente RBAC é sobre permissões, não acesso inicial.


**9.** "Zero Trust Architecture significa que ninguém dentro da rede corporativa precisa de autenticação."

- **Gabarito:** E
- **Justificativa:** Oposto: Zero Trust exige autenticação/autorização *sempre*, até dentro da rede. Nunca confie implicitamente.


**10.** "TLS 1.0 ainda é adequado para proteger dados em trânsito em ambientes de produção críticos."

- **Gabarito:** E
- **Justificativa:** TLS 1.0 é vulnerável (POODLE, obsoleto). Padrão moderno: TLS 1.2+, preferencialmente TLS 1.3.


---

### **Bloco 3: Armazenamento & Dados**

**11.** "Armazenamento em objetos (S3) é ideal para buscas frequentes de registros individuais em um banco de dados operacional."

- **Gabarito:** E
- **Justificativa:** S3 = latência alta (segundos), acesso chave-valor. Banco de dados transacional (blocos, IOPS) é mais apropriado.


**12.** "Blocos (EBS) são mais caros que objetos (S3) porque oferecem latência muito menor e acesso direto."

- **Gabarito:** C
- **Justificativa:** Verdadeiro. EBS = milissegundos, monta como disco. S3 = segundos, HTTP/S. Diferença reflete em custo.


**13.** "Arquivos compartilhados (EFS, Azure Files) podem ser acessados simultaneamente por múltiplas VMs sem sincronização adicional."

- **Gabarito:** C
- **Justificativa:** Compartilhamento nativo é função deles (NFS/SMB). Sincronização é implícita pelo protocolo (POSIX semantics).


---

### **Bloco 4: Redes & Conectividade**

**14.** "Uma VPN site-to-site oferece sempre menor latência que Direct Connect."

- **Gabarito:** E
- **Justificativa:** VPN usa internet (latência variável). Direct Connect = conexão dedicada (latência < 1 ms, previsível). Direct Connect é mais rápido.


**15.** "Direct Connect (AWS) é uma conexão criptografada entre on-premises e nuvem."

- **Gabarito:** E (parcialmente impreciso)
- **Justificativa:** Direct Connect *não* é criptografada por padrão (é ponto-a-ponto físico). Criptografia é camada acima (IPSec, TLS). Para "seguro", precisa adicionar criptografia.


**16.** "Um grupo de segurança em nuvem é um firewall stateful que permite rastreamento de conexões."

- **Gabarito:** C
- **Justificativa:** Correto. Grupo de Segurança é stateful: se permite saída, retorno é automático permitido.


**17.** "Subredes privadas nunca conseguem acessar a Internet."

- **Gabarito:** E
- **Justificativa:** Subredes privadas (sem IP público) *conseguem* acessar Internet via NAT Gateway/Instance. É seguro (tráfego sainte-out apenas).


---

### **Bloco 5: Conformidade & Governança**

**18.** "ISO/IEC 27001 é um padrão que define requisitos de segurança da informação; NIST 800-53 foca especificamente em conformidade LGPD."

- **Gabarito:** E
- **Justificativa:** ISO 27001 = segurança genérica; NIST 800-53 = federal EUA (não LGPD); LGPD = lei brasileira de dados pessoais. Funções diferentes.


**19.** "A LGPD (Lei Geral de Proteção de Dados) exige que dados pessoais de indivíduos brasileiros sejam armazenados em regiões geográficas do Brasil."

- **Gabarito:** E (impreciso)
- **Justificativa:** LGPD não exige regiões BR especificamente. Exige proteção proporcional, conformidade com direitos. Localização é recomendação prática, não obrigação estrita.


**20.** "Tagging de recursos em nuvem é obrigatório para governança, rastreamento de custos e auditoria."

- **Gabarito:** C (em contexto empresarial rigoroso)
- **Justificativa:** Embora não seja forçada tecnicamente, é obrigatória em políticas empresariais boas (conformidade, chargeback, auditoria). Cebraspe cobra expectativa.


---

### **Bloco 6: Arquitetura & Resiliência**

**21.** "Um sistema Multi-AZ replica dados e aplicações em múltiplas zonas de disponibilidade para garantir alta disponibilidade."

- **Gabarito:** C
- **Justificativa:** Multi-AZ é padrão de HA. Replica infraestrutura e dados, failover automático se uma AZ cai.


**22.** "Auto-scaling horizontal adiciona poder de processamento (CPU, memória) aos servidores existentes."

- **Gabarito:** E
- **Justificativa:** Isso é vertical (scale-up). Horizontal (scale-out) adiciona *novos* servidores.


**23.** "Circuit Breaker é um padrão que evita chamadas a serviços que estão falhando, retornando rápido com erro ou fallback."

- **Gabarito:** C
- **Justificativa:** Preciso. Circuit Breaker isola falhas, evita cascata, melhora resiliência.


**24.** "RTO (Recovery Time Objective) define quanto tempo leva para restaurar sistema após falha."

- **Gabarito:** C
- **Justificativa:** Exato. RTO = tempo máximo aceitável de downtime. RPO = dados máximos que pode perder.


---

### **Bloco 7: DevOps & Infraestrutura**

**25.** "Terraform é uma ferramenta que permite definir infraestrutura em código (IaC) de forma agnóstica ao provedor."

- **Gabarito:** C
- **Justificativa:** Terraform suporta múltiplos provedores (AWS, Azure, GCP, etc.) com sintaxe unificada. É agnóstico.


**26.** "Uma pipeline CI/CD deve fazer deploy automático para produção toda vez que código entra em main, sem validação."

- **Gabarito:** E
- **Justificativa:** Prática perigosa. CI/CD correto: testes automáticos, aprovação, deploy controlado (feature flags, canary, blue-green).


**27.** "Observabilidade (logs, métricas, traces) reduz MTTR (Mean Time To Repair) porque permite correlação rápida de eventos."

- **Gabarito:** C
- **Justificativa:** Verdadeiro. Observabilidade centralizada acelera root cause analysis.


---

### **Bloco 8: Multicloud & Híbrida**

**28.** "Uma arquitetura multicloud usa múltiplos provedores de nuvem para reduzir vendor lock-in."

- **Gabarito:** C
- **Justificativa:** Um dos principais motivos (junto com redundância geográfica e resiliência).


**29.** "Nuvem híbrida e multicloud são sinônimos."

- **Gabarito:** E
- **Justificativa:** Não. Híbrida = pública + privada/on-premises. Multicloud = múltiplos públicos. Conceitos distintos.


**30.** "Soberania de dados garante que dados sensíveis de uma nação fiquem armazenados fisicamente dentro daquele país."

- **Gabarito:** C (em contexto legal)
- **Justificativa:** Soberania de dados é requisito regulatório que exige dados residir em jurisdição específica (Brasil = LGPD, ex).


---

## 7️⃣ MINI-CASOS DE ARQUITETURA

**Cenário 1: E-commerce Brasileiro com Crescimento Sazonal**

> Uma empresa de e-commerce brasileira experimenta picos 10x na Black Friday. Hoje roda em um único servidor on-premises em SP. Quer migrar para nuvem, mas precisa cumprir LGPD (dados em Brasil), ter zero downtime em promoções, e otimizar custos fora de picos. Qual estratégia e serviços recomenda?



**Resposta esperada:**

- **Estratégia de Migração:** Replatform (modernizar, não apenas lift & shift). Separar BD (SQL dedicado), aplicação (containers + K8s), frontend (CDN).
- **Localização:** Usar região Brasil (São Paulo) em provedor cloud. Dados pessoais com criptografia KMS + RBAC LGPD-ready.
- **Escalabilidade:** Auto-scaling horizontal com Kubernetes ou ECS (containers). Load Balancer distribui tráfego.
- **Resiliência:** Multi-AZ (São Paulo tem múltiplas zonas), backup automático, RTO/RPO definido.
- **Custos:** Reserved Instances para base; Spot para overflow; Auto-scaling desliga servers fora de picos.
- **Ferramentas:** Terraform (IaC), CI/CD (GitHub Actions), observabilidade (CloudWatch/DataDog).


---

**Cenário 2: Agência Bancária com Dados Ultra-Sensíveis**

> Banco precisa de arquitetura híbrida: dados de transações ficam on-premises (vault seguro, compliance extremo), mas wants analíticos em nuvem pública sem expor identidades. Como estruturar?



**Resposta esperada:**

- **Hibridez:** On-premises = BD operacional (transações, PII). Nuvem = Data Lake (dados agregados, anonymizados, sem PII).
- **Conectividade:** Direct Connect (não VPN) entre datacenter e nuvem, com encriptação TLS adicionada.
- **Segurança:** Zero Trust: autenticação mTLS entre serviços, segregação de rede (subredes privadas), VPC isolada.
- **Conformidade:** ISO 27001, NIST 800-53 (contexto federal). Auditoria centralizada de todos acessos.
- **IAM:** RBAC granular, Segregação de Duty (ninguém tem admin em tudo), MFA obrigatório.
- **Dados em Repouso:** KMS para chaves (on-premises + nuvem), rotação automática.


---

**Cenário 3: Startup de SaaS Escalável e Multi-tenant**

> Startup quer SaaS multi-tenant, low-cost inicialmente, escalável para 100k clientes, evitando vendor lock-in, com observabilidade. Qual stack?



**Resposta esperada:**

- **Arquitetura:** Microsserviços em Kubernetes (agnóstico a nuvem), banco de dados por tenants (ou sharding se escala extrema).
- **Deployment:** Terraform + GitOps (Helm, ArgoCD) para reproductibilidade, multi-cloud ready.
- **Custo Inicial:** Serverless (AWS Lambda, GCP Functions) para APIs, escalando automaticamente. DynamoDB/Firestore (NoSQL) sem gerenciar BD.
- **Scale Posterior:** Migrar para K8s quando volume justificar (`< 1M requests/mês = serverless; >` 10M = K8s).
- **Observabilidade:** Logs centralizados (ELK, Loki), métricas (Prometheus), traces distribuídos (Jaeger). Essencial para multi-tenant.
- **Segurança:** Isolamento por tenant (subnets, labels), RBAC, encriptação em repouso + trânsito.


---

**Cenário 4: Órgão Público Federal com Conformidade Extrema**

> Ministério quer mover aplicações para "nuvem federal brasileira" cumprindo NIST 800-53, LGPD, e ter conformidade auditada continuamente.



**Resposta esperada:**

- **Provedor:** Nuvem soberana (ex: Huawei Cloud Brasil, DigitalOcean Brasil, ou cloud.gov.br federal). Jurisdição Brasil garantida.
- **Conformidade:** Políticas as Code (IaC + compliance scanning). Cada deploy testa NIST 800-53, ISO 27001.
- **Governança:** Tagging obrigatório (Ministério, Sistema, Sigilo). Cotas por departamento. FinOps rigoroso.
- **Auditoria:** Logs imutáveis, assinatura de audit trail, backup seguro, RTO reduzido (< 1 hora).
- **Segurança:** Zero Trust, segmentação de rede (DMZ, App, Data), criptografia em repouso + trânsito, MFA para admin.
- **Dados:** Residência em Brasil, backup geográficamente distribuído (BR apenas).


---

**Cenário 5: Migração de Monolito para Microserviços com Downtime Zero**

> Aplicação monolítica em Java roda em prod 24/7. Quer quebrar em 5 microsserviços sem parar. Como?



**Resposta esperada:**

- **Estratégia:** Strangler Fig (substituição gradual). Novo código escrito como microsserviço, chamado pelo monolito via API Gateway.
- **Fase 1:** Microsserviço A roda em paralelo ao monolito, recebe % do tráfego (canary). API Gateway redireciona.
- **Fase 2:** Aumenta % gradualmente (blue-green deployment). Monitora métricas (erro, latência). Se falha, rollback automático.
- **Integração:** Event-driven (Kafka, SNS/SQS) entre microsserviços e monolito. Assincronia evita acoplamento.
- **Containers:** Docker para microsserviços, K8s para orquestração, Helm para declarativo.
- **Observabilidade:** Distributed tracing (Jaeger) correlaciona requests entre monolito e microsserviços.
- **Rollback:** Cada canary tem health checks; falha = revertem tráfego ao monolito automaticamente.


---

## 8️⃣ GUIA DE REVISÃO SPACED (7/14/30 Dias)

### **DIA 0–1: Imersão 80/20 (2–3 horas)**

**Leia:**

1. [Mapa 80/20](#1️⃣-mapa-8020-dos-tópicos-críticos) completo (identifique os 12 pilares)
2. [Resumo Executivo](#2️⃣-resumo-executivo-princípios-força) (reforce princípios)
3. [Bloco 1–2 de Assertivas](#6️⃣-banco-de-assertivas-cebraspe-ce) (1–20: fundamentos + segurança)


**Exercício:** Faça Bloco 1–2 em papel/Anki. Acertou < 80%? Releia o conceito antes de prosseguir.

**Takeaway:** Você agora domina fundamentos (IaaS/PaaS/SaaS, IAM, elasticidade).

---

### **DIA 2–3: Consolidar Segurança & Redes (2 horas)**

**Leia:**

1. [Comparativos: VPN vs Direct Connect](#vpn-site-to-site-vs-direct-connect-vs-expressroute)
2. [Checklist: Segmentação de Rede & Acesso](#-segmentação-de-rede--controle-de-acesso)
3. [Bloco 3–4 de Assertivas](#bloco-4-redes--conectividade) (14–17)


**Exercício:** Desenhe em papel: VPC com 3 subredes (pública, privada, BD), grupos de segurança, NAT. Identifique responsabilidades e fluxos.

**Reforço:** Regressa ao [Resumo: Defense in Depth](#pilares-recorrentes-em-questões-ce) e [Zero Trust](#padrão-zero-trust-architecture-1).

**Takeaway:** Você domina segurança de rede e controle de acesso.

---

### **DIA 4–5: Armazenamento & Dados (1.5 horas)**

**Leia:**

1. [Comparativo: Objetos vs Blocos vs Arquivos](#armazenamento-objetos-vs-blocos-vs-arquivos)
2. [Bloco 3 de Assertivas](#bloco-3-armazenamento--dados) (11–13)
3. [Seção Armazenamento e Processamento de Dados](#7-armazenamento-e-processamento-de-dados) (do conteúdo)


**Exercício:** Matching: cenários (DB transacional, Data Lake, NFS) → tipo de armazenamento (EBS, S3, EFS). Justifique cada resposta.

**Takeaway:** Você escolhe armazenamento correto por caso de uso.

---

### **DIA 6–7: Revisão Consolidada + Padrões (2 horas)**

**Leia:**

1. [Padrões & Antipadrões](#5️⃣-padrões--antipadrões) completo
2. [Bloco 5–7 de Assertivas](#bloco-5-conformidade--governança) (18–27)


**Exercício:** Para cada antipadrão, desenhe cenário "correto". Ex: antipadrão "Secrets em código" → correto: Secrets Manager com rotação.

**Gabarito:** Você consegue justificar por que cada prática é melhor.

---

### **DIA 8–14: Arquitetura & Casos Práticos (3 horas nesta semana)**

**Leia:**

1. [Mini-Casos de Arquitetura](#7️⃣-mini-casos-de-arquitetura) (todos 5)
2. [Mapa 80/20: Estratégias de Migração + Governança + Resiliência](#1️⃣-mapa-8020-dos-tópicos-críticos)


**Exercício:** Para cada caso, desenhe diagrama (VPCs, subnets, serviços). Responda: RTO? Custo? Segurança? Escolha de AWS/Azure/GCP e justifique.

**Autoavaliação:** Você consegue argumentar decisão arquitetural com critérios?

---

### **DIA 15–21: Ciclo 2 – Aprofundamento + Prática (2 horas nesta semana)**

**Refaça:**

1. Bloco 1–2 de Assertivas (fundamentos) – deve acertar 100%.
2. Bloco 5–7 (conformidade, DevOps) – revise conceitos que errou.


**Novos:**

1. Leia [Checklists de Arquitetura](#4️⃣-checklists-de-arquitetura-e-segurança) completo.
2. [Bloco 8 de Assertivas](#bloco-8-multicloud--híbrida) (28–30).


**Exercício:** Simule prova: 10 questões aleatórias (Certo/Errado) de bancos online. Revise erros.

---

### **DIA 22–30: Ciclo 3 – Polimento (2 horas nesta semana)**

**Revise:**

1. [Comparativos-Chave](#3️⃣-comparativos-chave-em-tabela) (reforce diferenças definidoras).
2. Todos [Antipadrões ❌](#antipadrões-cebraspe-penaliza) (pegadinhas recorrentes).


**Refaça:**

1. Todas 30 assertivas (deve acertar > 90%).


**Final:**

1. Simule 2 provas completas (60 questões, tempo real).
2. Revise erros com justificativa.


---

### **Rotina de Manutenção (Pós-30 dias)**

**Semanal (30 min):**

- Releia 1 seção de [Mapa 80/20](#1️⃣-mapa-8020-dos-tópicos-críticos).
- Faça 5 assertivas aleatórias.


**Quinzenal (1 hora):**

- 1 [Mini-Caso](#7️⃣-mini-casos-de-arquitetura) completo (desenho + resposta).


**Mensal (2 horas):**

- Prova simulada completa.
- Revise conceitos que mais errou.


---

## **Índice Rápido (Links Internos)**

| Tópico | Link
|-----|-----|-----
| **80/20 Críticos** | [Seção 1](#1️⃣-mapa-8020-dos-tópicos-críticos)
| **IAM & Segurança** | [Resumo](#pilares-recorrentes-em-questões-ce), [Checklist](#-segmentação-de-rede--controle-de-acesso)
| **Armazenamento** | [Comparativo](#armazenamento-objetos-vs-blocos-vs-arquivos), [Assertivas 11–13](#bloco-3-armazenamento--dados)
| **Redes & VPN** | [Comparativo VPN/Direct Connect](#vpn-site-to-site-vs-direct-connect-vs-expressroute), [Assertivas 14–17](#bloco-4-redes--conectividade)
| **Resiliência** | [Padrões](#-padrão-design-for-failure-resiliente), [Assertivas 21–24](#bloco-6-arquitetura--resiliência)
| **Conformidade** | [Checklist](#-governança--conformidade), [Assertivas 18–20](#bloco-5-conformidade--governança)
| **Casos Práticos** | [Seção 7](#7️⃣-mini-casos-de-arquitetura)
| **Revisão Spaced** | [Seção 8](#8️⃣-guia-de-revisão-spaced-714-dias)


---

## **ENCERRAMENTO**

Você está pronto para Cebraspe. Foco: **Conceitos, não ferramentas**. A banca cobra entendimento fino de trade-offs, responsabilidades compartilhadas, e exceções.

**Principais pegadinhas finais:**

- ⚠️ "Sempre" e "nunca" raramente são verdade (procure exceções).
- ⚠️ Confusão entre hybrid (pública + privada) e multicloud (múltiplos públicos).
- ⚠️ TLS em trânsito **não** criptografa em repouso.
- ⚠️ RBAC não é autenticação; é autorização.


**Boa sorte!** 🎯
