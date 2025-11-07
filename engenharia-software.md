# 150 QUESTÕES ESTRATÉGICAS - ENGENHARIA DE SOFTWARE
## CEBRASPE/TCU - Auditor de TI (2025)
### Aplicação do Princípio de Pareto 80/20

---

## BLOCO 1: MICROSERVIÇOS E ARQUITETURA (25 QUESTÕES)
*[Tópico de máxima incidência: 90% de chance de aparecer na prova]*

**Questão 1** (CEBRASPE/TCU - Auditor de TI)
Em arquiteturas de microserviços, todos os serviços devem necessariamente utilizar a mesma tecnologia de banco de dados para garantir a consistência dos dados entre os diferentes componentes do sistema.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Pegadinha clássica do CEBRASPE usando termo absoluto "devem necessariamente". Microserviços permitem polyglot persistence - cada serviço pode usar o banco mais adequado (SQL, NoSQL, cache). Essa autonomia tecnológica é uma das principais vantagens dos microserviços.

**Questão 2** (CEBRASPE/TCU - Auditor de TI)
A arquitetura de microserviços sempre resulta em melhor performance quando comparada a aplicações monolíticas, devido à distribuição da carga de processamento entre múltiplos serviços independentes.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Termo absoluto "sempre" indica erro. Microserviços podem DIMINUIR performance devido à latência de rede entre serviços e overhead de serialização/deserialização. O trade-off é escalabilidade vs complexidade/latência.

**Questão 3** (CEBRASPE/TCU - Auditor de TI)
Em uma arquitetura serverless, o desenvolvedor não precisa se preocupar com o gerenciamento de servidores, pois a infraestrutura é completamente abstraída e gerenciada pelo provedor de nuvem.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Assertiva correta sem termos absolutos problemáticos. Serverless (FaaS) abstrai totalmente a infraestrutura - você paga por execução, não por servidor. AWS Lambda, Azure Functions são exemplos.

**Questão 4** (CEBRASPE/TCU - Auditor de TI)
O padrão API Gateway em arquiteturas de microserviços atua como ponto único de entrada para clientes externos, podendo realizar funções como autenticação, rate limiting e roteamento de requisições.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição técnica precisa do API Gateway. Note o uso de "podendo" (flexibilidade) ao invés de "deve" (obrigatoriedade). Kong, Zuul, AWS API Gateway são implementações comuns.

**Questão 5** (CEBRASPE/TCU - Auditor de TI)
Service Mesh é uma camada de infraestrutura dedicada exclusivamente ao monitoramento de microserviços, não interferindo na comunicação entre os serviços.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão conceitual típica. Service Mesh (Istio, Linkerd) GERENCIA a comunicação entre serviços, incluindo roteamento, segurança, observabilidade - não apenas monitoramento.

**Questão 6** (CEBRASPE/TCU - Auditor de TI)
Aplicações monolíticas jamais devem ser utilizadas em ambientes corporativos modernos, pois microserviços sempre oferecem vantagens superiores em todos os cenários de uso.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Múltiplos termos absolutos ("jamais", "sempre", "todos"). Monolitos são válidos para: aplicações simples, equipes pequenas, MVPs, domínios bem definidos. Netflix começou monolítica.

**Questão 7** (CEBRASPE/TCU - Auditor de TI)
O padrão CQRS (Command Query Responsibility Segregation) separa as operações de leitura das operações de escrita, permitindo otimizações específicas para cada tipo de operação.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição correta de CQRS. Permite usar bancos diferentes para leitura (otimizado para queries) e escrita (otimizado para transações). Comum em event sourcing.

**Questão 8** (CEBRASPE/TCU - Auditor de TI)
Em uma arquitetura orientada a eventos, os microserviços comunicam-se primariamente através de mensagens assíncronas, reduzindo o acoplamento temporal entre os componentes.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição precisa. Event-driven architecture usa mensageria (Kafka, RabbitMQ) para comunicação assíncrona, permitindo que serviços operem independentemente no tempo.

**Questão 9** (CEBRASPE/TCU - Auditor de TI)
Microserviços devem obrigatoriamente implementar sua própria solução de descoberta de serviços (service discovery), não podendo utilizar soluções centralizadas como Consul ou Eureka.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Termo absoluto "obrigatoriamente" + inversão. Microserviços PODEM e frequentemente DEVEM usar service discovery centralizado (Consul, Eureka, Kubernetes Services).

**Questão 10** (CEBRASPE/TCU - Auditor de TI)
A decomposição de um monolito em microserviços deve sempre começar pela separação do banco de dados, antes de dividir a lógica de negócio.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" indica erro. Strangler Fig Pattern sugere começar pela lógica de negócio, mantendo banco compartilhado inicialmente. Separação de dados é geralmente última etapa.

**Questão 11** (CEBRASPE/TCU - Auditor de TI)
Circuit Breaker é um padrão de resiliência em microserviços que previne cascata de falhas, interrompendo temporariamente chamadas a serviços que apresentam alta taxa de erro.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição correta do Circuit Breaker (Hystrix, Resilience4j). Estados: Closed (normal), Open (bloqueado), Half-Open (teste). Essencial para fault tolerance.

**Questão 12** (CEBRASPE/TCU - Auditor de TI)
Em arquiteturas serverless, funções Lambda sempre executam mais rapidamente que containers Docker devido à ausência de overhead de virtualização.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" + conceito errado. Lambda tem cold start que pode torná-la MAIS lenta inicialmente. Containers "warm" podem ser mais rápidos. Trade-off: elasticidade vs latência consistente.

**Questão 13** (CEBRASPE/TCU - Auditor de TI)
O padrão Saga é utilizado em microserviços para gerenciar transações distribuídas através de uma sequência de transações locais coordenadas.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição correta de Saga Pattern. Duas implementações: Choreography (eventos) ou Orchestration (coordenador central). Alternativa ao 2PC em microserviços.

**Questão 14** (CEBRASPE/TCU - Auditor de TI)
Microserviços nunca devem compartilhar banco de dados, pois isso violaria o princípio fundamental de independência e autonomia dos serviços.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Nunca" torna errado. Embora não seja ideal, microserviços PODEM compartilhar banco temporariamente durante migração ou em casos específicos. Anti-pattern, mas não impossível.

**Questão 15** (CEBRASPE/TCU - Auditor de TI)
Event Sourcing é um padrão arquitetural onde o estado da aplicação é determinado pela sequência completa de eventos que ocorreram, ao invés de armazenar apenas o estado atual.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição precisa de Event Sourcing. Permite auditoria completa, replay de eventos, projeções múltiplas. Comum com CQRS em sistemas financeiros/auditáveis.

**Questão 16** (CEBRASPE/TCU - Auditor de TI)
API Gateway sempre deve implementar a lógica de negócio dos microserviços para otimizar a performance das requisições.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" + anti-pattern. API Gateway deve ser "thin" - apenas roteamento, auth, rate limiting. Lógica de negócio nos microserviços mantém separação de responsabilidades.

**Questão 17** (CEBRASPE/TCU - Auditor de TI)
Em uma arquitetura de microserviços, o uso do padrão Backend for Frontend (BFF) permite criar APIs específicas para diferentes tipos de clientes, como web e mobile.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição correta do BFF. Cada cliente (web, mobile, IoT) tem seu backend específico, otimizando payload e reduzindo over-fetching/under-fetching.

**Questão 18** (CEBRASPE/TCU - Auditor de TI)
Arquiteturas monolíticas são sempre menos resilientes que microserviços, pois a falha em qualquer componente derruba toda a aplicação.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" invalida. Monolitos bem arquitetados podem ser resilientes. Microserviços mal implementados podem ter mais pontos de falha (rede, serialização, service discovery).

**Questão 19** (CEBRASPE/TCU - Auditor de TI)
O padrão Sidecar em arquiteturas de microserviços consiste em executar funcionalidades auxiliares em um container separado, mas no mesmo pod que o serviço principal.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição precisa do Sidecar Pattern. Comum em Service Mesh (Envoy proxy como sidecar). Separa concerns: logging, monitoring, security do business logic.

**Questão 20** (CEBRASPE/TCU - Auditor de TI)
Microserviços devem sempre ser stateless para garantir escalabilidade horizontal eficiente.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" problemático. Alguns microserviços PRECISAM de estado (databases, caches). O ideal é minimizar estado ou usar external stores, mas nem sempre é possível ser 100% stateless.

**Questão 21** (CEBRASPE/TCU - Auditor de TI)
A estratégia de deployment Blue-Green em microserviços permite rollback instantâneo através da alternância entre dois ambientes de produção idênticos.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição correta de Blue-Green deployment. Blue (atual), Green (nova versão). Teste em Green, switch de tráfego, rollback rápido se problemas.

**Questão 22** (CEBRASPE/TCU - Auditor de TI)
Canary deployment é uma estratégia onde a nova versão de um microserviço é gradualmente liberada para uma pequena porcentagem de usuários antes do rollout completo.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição precisa de Canary. Libera para 5-10% inicialmente, monitora métricas, expande gradualmente. Reduz risco comparado a big-bang deployment.

**Questão 23** (CEBRASPE/TCU - Auditor de TI)
Em arquiteturas serverless, o vendor lock-in nunca é uma preocupação, pois todas as plataformas FaaS seguem exatamente os mesmos padrões.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Nunca" + afirmação falsa. Vendor lock-in é MAIOR em serverless. AWS Lambda, Azure Functions, Google Cloud Functions têm APIs diferentes, triggers específicos.

**Questão 24** (CEBRASPE/TCU - Auditor de TI)
O uso de API Gateway elimina completamente a necessidade de implementar segurança nos microserviços individuais.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Completamente" indica erro. Defense in depth: API Gateway faz primeira camada (auth, rate limit), mas microserviços devem validar/autorizar internamente também.

**Questão 25** (CEBRASPE/TCU - Auditor de TI)
Domain-Driven Design (DDD) pode auxiliar na identificação de bounded contexts, que servem como base para delimitar os limites de microserviços.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conexão correta DDD-Microserviços. Bounded contexts definem fronteiras naturais para serviços. Aggregates indicam transações. Ubiquitous language por serviço.

---

## BLOCO 2: DOCKER E KUBERNETES (30 QUESTÕES)
*[Tópico de máxima incidência: 90% de chance de aparecer na prova]*

**Questão 26** (CEBRASPE/TCU - Auditor de TI)
Docker containers sempre consomem menos recursos que máquinas virtuais porque compartilham o kernel do sistema operacional hospedeiro.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" problemático. Embora geralmente verdadeiro, containers mal configurados podem consumir mais recursos que VMs otimizadas. O compartilhamento de kernel é fato, mas não garante sempre menor consumo.

**Questão 27** (CEBRASPE/TCU - Auditor de TI)
No Kubernetes, um pod é a menor unidade deployável e pode conter um ou mais containers que compartilham rede e armazenamento.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição fundamental correta. Pod = unidade atômica. Containers no mesmo pod compartilham IP, portas, volumes. Multi-container pods usam padrão sidecar/ambassador.

**Questão 28** (CEBRASPE/TCU - Auditor de TI)
O comando kubectl apply sempre criará novos recursos no cluster Kubernetes, não podendo ser usado para atualizar recursos existentes.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão típica CEBRASPE. kubectl apply faz "upsert" - cria SE não existe, atualiza SE existe. É o comando declarativo preferido sobre create/replace.

**Questão 29** (CEBRASPE/TCU - Auditor de TI)
StatefulSet no Kubernetes é utilizado para aplicações que requerem identidade persistente e armazenamento estável, mantendo ordem de criação e exclusão dos pods.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição precisa de StatefulSet. Pods têm nomes estáveis (app-0, app-1), PersistentVolumes próprios, ordem garantida. Ideal para databases, Kafka, Zookeeper.

**Questão 30** (CEBRASPE/TCU - Auditor de TI)
ConfigMap no Kubernetes é usado para armazenar dados confidenciais como senhas e tokens de API, fornecendo criptografia automática.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Pegadinha clássica TC-DF 2024. ConfigMap = dados NÃO sensíveis (configs). Secret = dados sensíveis (senhas). ConfigMap não tem criptografia.

**Questão 31** (CEBRASPE/TCU - Auditor de TI)
Docker images são compostas por camadas read-only, e apenas o container em execução possui uma camada writeable no topo.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Arquitetura correta de layers. Images = read-only layers (reusáveis). Container = thin writable layer on top. Copy-on-write strategy economiza espaço.

**Questão 32** (CEBRASPE/TCU - Auditor de TI)
O comando kubeadm init é utilizado para adicionar worker nodes a um cluster Kubernetes existente.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Questão real TC-DF 2024. kubeadm init = inicializa CONTROL PLANE. kubeadm join = adiciona WORKERS. Inversão comando/função comum no CEBRASPE.

**Questão 33** (CEBRASPE/TCU - Auditor de TI)
DaemonSet no Kubernetes garante que exatamente uma cópia de um pod seja executada em cada nó do cluster, sendo útil para agentes de monitoramento e log collection.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição precisa de DaemonSet. Um pod por nó, automaticamente em novos nós. Casos: Fluentd, Datadog agent, Node exporter. Diferente de Deployment/ReplicaSet.

**Questão 34** (CEBRASPE/TCU - Auditor de TI)
Containers Docker sempre precisam de um Dockerfile para serem criados, não sendo possível criar containers através de commits de containers em execução.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" invalida. docker commit cria image de container running. Não é best practice (preferir Dockerfile), mas é possível. CEBRASPE testa conhecimento de comandos alternativos.

**Questão 35** (CEBRASPE/TCU - Auditor de TI)
No Kubernetes, Services do tipo ClusterIP expõem o serviço apenas internamente ao cluster, não sendo acessível de fora do cluster.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Correto sobre ClusterIP (default). Apenas interno. NodePort = porta em cada nó. LoadBalancer = LB externo. ExternalName = CNAME mapping.

**Questão 36** (CEBRASPE/TCU - Auditor de TI)
Horizontal Pod Autoscaler (HPA) no Kubernetes pode escalar pods baseado exclusivamente em métricas de CPU, não suportando métricas customizadas.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Exclusivamente" torna errado. HPA suporta: CPU, memória (v2), custom metrics (v2beta2), external metrics. Prometheus adapter comum para custom metrics.

**Questão 37** (CEBRASPE/TCU - Auditor de TI)
Docker Compose é uma ferramenta para orquestração de containers em produção, substituindo completamente o Kubernetes em ambientes enterprise.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Confusão proposital. Docker Compose = desenvolvimento/teste local, não produção enterprise. Kubernetes = orquestração produção. Compose não tem HA, autoscaling, rolling updates robustos.

**Questão 38** (CEBRASPE/TCU - Auditor de TI)
No Kubernetes, um Deployment gerencia ReplicaSets e fornece declarative updates para Pods, permitindo rollbacks para versões anteriores.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Hierarquia correta: Deployment > ReplicaSet > Pods. Deployment mantém histórico de ReplicaSets para rollback. kubectl rollout undo faz reversão.

**Questão 39** (CEBRASPE/TCU - Auditor de TI)
Ingress no Kubernetes sempre requer um LoadBalancer externo para funcionar, não podendo operar apenas com NodePort.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" problemático. Ingress Controller pode usar NodePort (+ proxy externo), LoadBalancer, ou HostNetwork. Nginx Ingress funciona com NodePort em clusters on-premise.

**Questão 40** (CEBRASPE/TCU - Auditor de TI)
Persistent Volumes (PV) no Kubernetes têm ciclo de vida independente dos Pods, permitindo que dados sobrevivam à destruição de Pods.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conceito fundamental correto. PV = recurso cluster. PVC = claim do pod. Pod morre, PV permanece. ReclaimPolicy define comportamento (Retain/Delete/Recycle).

**Questão 41** (CEBRASPE/TCU - Auditor de TI)
Docker containers nunca podem executar processos com privilégios de root, garantindo isolamento completo de segurança.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Nunca" falso. Containers PODEM rodar como root (default em muitos casos). --user flag ou USER no Dockerfile mudam isso. Rootless containers são best practice, não obrigatórios.

**Questão 42** (CEBRASPE/TCU - Auditor de TI)
Init containers no Kubernetes executam antes dos containers principais do pod e devem completar com sucesso antes que os app containers iniciem.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição correta de init containers. Executam sequencialmente, devem terminar com sucesso. Casos: setup de config, esperar dependencies, clonar git repos.

**Questão 43** (CEBRASPE/TCU - Auditor de TI)
Namespaces no Kubernetes fornecem isolamento físico completo entre recursos, impedindo qualquer comunicação entre pods de namespaces diferentes.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Impedindo qualquer comunicação" é falso. Namespaces = isolamento LÓGICO, não físico. Pods podem comunicar entre namespaces por default. NetworkPolicy restringe se necessário.

**Questão 44** (CEBRASPE/TCU - Auditor de TI)
O comando docker build sempre reexecuta todos os passos do Dockerfile, ignorando o cache de camadas para garantir build atualizado.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" errado. Docker usa cache de layers por default. --no-cache força rebuild completo. Cache invalida se: Dockerfile muda, arquivos COPY/ADD mudam, base image atualiza.

**Questão 45** (CEBRASPE/TCU - Auditor de TI)
Liveness probe no Kubernetes é usado para determinar quando reiniciar um container que está em estado não saudável.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Correto. Liveness = restart se falhar. Readiness = remove de service se falhar. Startup = dá tempo extra na inicialização. Três tipos: HTTP, TCP, Command.

**Questão 46** (CEBRASPE/TCU - Auditor de TI)
Docker Hub é o único registry possível para armazenar e distribuir Docker images, não sendo viável criar registries privados.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Único" torna falso. Registries privados: Harbor, Nexus, GitLab Registry, AWS ECR, Azure ACR. docker run registry:2 cria registry básico.

**Questão 47** (CEBRASPE/TCU - Auditor de TI)
Jobs no Kubernetes são usados para executar tarefas que devem ser completadas uma ou mais vezes, diferente de Deployments que mantêm pods sempre em execução.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Distinção correta. Job = batch processing, termina quando completa. CronJob = scheduled jobs. Deployment = long-running services. Parallelism e completions configuráveis em Jobs.

**Questão 48** (CEBRASPE/TCU - Auditor de TI)
Multi-stage builds em Docker permitem otimizar o tamanho da imagem final usando stages temporários para compilação e copiando apenas artefatos necessários.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Best practice correta. FROM golang AS builder (compila), FROM alpine (runtime mínimo), COPY --from=builder. Reduz drasticamente tamanho, remove build tools da imagem final.

**Questão 49** (CEBRASPE/TCU - Auditor de TI)
Kubernetes Secrets são automaticamente criptografados em repouso (at rest) em etcd sem necessidade de configuração adicional.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Pegadinha de segurança. Secrets são apenas base64 por default, NÃO criptografados. Precisa habilitar encryption at rest explicitamente. CEBRASPE adora testar isso.

**Questão 50** (CEBRASPE/TCU - Auditor de TI)
Resource Quotas no Kubernetes podem limitar o consumo total de recursos computacionais em um namespace, incluindo CPU, memória e número de objetos.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Funcionalidade correta. ResourceQuota limita por namespace: requests/limits totais, número de pods/services/PVCs. LimitRange define min/max por pod. Governance essencial.

**Questão 51** (CEBRASPE/TCU - Auditor de TI)
Containers Docker sempre compartilham as mesmas bibliotecas do sistema operacional host, nunca incluindo suas próprias dependências.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre/nunca" duplo erro. Containers incluem SUAS PRÓPRIAS libs/dependências na image. Compartilham apenas kernel. Isso garante portabilidade - "runs anywhere".

**Questão 52** (CEBRASPE/TCU - Auditor de TI)
Rolling updates no Kubernetes permitem atualizar aplicações sem downtime, substituindo pods gradualmente com a nova versão.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Estratégia default correta. maxSurge = quantos pods extras durante update. maxUnavailable = quantos podem estar down. Zero-downtime deployment quando configurado corretamente.

**Questão 53** (CEBRASPE/TCU - Auditor de TI)
Pod Disruption Budgets (PDB) no Kubernetes garantem que um número mínimo de pods permaneça disponível durante operações voluntárias de disrupção.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conceito importante para HA. PDB protege contra: node drain, cluster upgrade, eviction. Define minAvailable ou maxUnavailable. Não protege contra falhas involuntárias.

**Questão 54** (CEBRASPE/TCU - Auditor de TI)
Docker Swarm é sempre superior ao Kubernetes para orquestração de containers, oferecendo mais funcionalidades e melhor performance.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre superior" obviamente falso. Kubernetes domina mercado, mais features, ecossistema maior. Swarm mais simples, mas menos poderoso. Kubernetes é padrão de facto.

**Questão 55** (CEBRASPE/TCU - Auditor de TI)
Network Policies no Kubernetes funcionam como firewall para pods, controlando tráfego ingress e egress baseado em labels e namespaces.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição correta. NetworkPolicy = L3/L4 firewall. Seleciona pods por labels, define allowed sources/destinations. Requer CNI plugin compatível (Calico, Cilium).

---

## BLOCO 3: DEVOPS E CI/CD (25 QUESTÕES)
*[Tópico de alta incidência: 85% de chance de aparecer na prova]*

**Questão 56** (CEBRASPE/TCU - Auditor de TI)
DevOps é exclusivamente uma ferramenta de automação que substitui completamente a necessidade de operações manuais em TI.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** DevOps é CULTURA/filosofia, não ferramenta. Combina Development + Operations. Foco: colaboração, automação, feedback contínuo. Ferramentas apoiam, não definem DevOps.

**Questão 57** (CEBRASPE/TCU - Auditor de TI)
Integração Contínua (CI) requer que desenvolvedores integrem código no branch principal várias vezes ao dia, com builds e testes automatizados validando cada integração.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição clássica de CI. Commit frequente (daily+), build automático, testes automáticos, feedback rápido. Detecta problemas cedo. Jenkins, GitLab CI, GitHub Actions.

**Questão 58** (CEBRASPE/TCU - Auditor de TI)
Entrega Contínua (Continuous Delivery) significa que todo código commitado é automaticamente deployado em produção sem intervenção humana.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Pegadinha CD vs CD. Continuous DELIVERY = pronto para produção, mas requer aprovação manual. Continuous DEPLOYMENT = automático até produção. CEBRASPE adora essa distinção.

**Questão 59** (CEBRASPE/TCU - Auditor de TI)
Infrastructure as Code (IaC) permite versionar, revisar e automatizar o provisionamento de infraestrutura usando arquivos de configuração declarativos.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conceito fundamental correto. Terraform, CloudFormation, Ansible. Infraestrutura vira código: versionável (Git), testável, reproduzível. Elimina "configuration drift".

**Questão 60** (CEBRASPE/TCU - Auditor de TI)
GitOps é uma metodologia onde Git é a única fonte de verdade para infraestrutura e aplicações, com mudanças aplicadas através de pull requests.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição precisa de GitOps. Git = source of truth. PRs = change mechanism. ArgoCD, Flux fazem sync automático. Auditoria completa via Git history.

**Questão 61** (CEBRASPE/TCU - Auditor de TI)
Pipeline de CI/CD deve sempre incluir deploy direto em produção após os testes automatizados passarem, sem necessidade de ambientes intermediários.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" e "sem ambientes intermediários" errado. Best practice: Dev→Test→Staging→Prod. Staging replica produção para testes finais. Progressive deployment reduz riscos.

**Questão 62** (CEBRASPE/TCU - Auditor de TI)
DevSecOps integra segurança desde o início do ciclo de desenvolvimento, ao invés de tratá-la como etapa final antes do deployment.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** "Shift-left security" correto. Segurança em todas as fases: IDE plugins, SAST no CI, dependency scanning, DAST em staging. Security as Code.

**Questão 63** (CEBRASPE/TCU - Auditor de TI)
Feature flags (feature toggles) permitem habilitar ou desabilitar funcionalidades em produção sem necessidade de novo deployment.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Técnica correta. Desacopla deploy de release. A/B testing, gradual rollout, kill switch. LaunchDarkly, Unleash, ConfigCat são ferramentas comuns.

**Questão 64** (CEBRASPE/TCU - Auditor de TI)
Monitoramento e observabilidade são conceitos idênticos, referindo-se apenas à coleta de métricas de aplicações em produção.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Conceitos diferentes. Monitoramento = métricas conhecidas/alertas. Observabilidade = entender comportamento através de outputs (metrics, logs, traces). Observabilidade é mais ampla.

**Questão 65** (CEBRASPE/TCU - Auditor de TI)
GitHub Actions é uma plataforma de CI/CD que permite automação de workflows diretamente no repositório, usando arquivos YAML para definição.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Descrição correta. Workflows em .github/workflows/. Triggers: push, PR, schedule, manual. Marketplace de actions. Integrado ao GitHub, compete com Jenkins/GitLab CI.

**Questão 66** (CEBRASPE/TCU - Auditor de TI)
Artifacts em pipelines CI/CD são sempre códigos compilados, nunca incluindo relatórios de testes ou documentação gerada.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre/nunca" errado. Artifacts incluem: binários, test reports, coverage reports, docs, Docker images, logs. Qualquer output relevante do pipeline.

**Questão 67** (CEBRASPE/TCU - Auditor de TI)
Shift-left testing significa mover atividades de teste para fases iniciais do desenvolvimento, detectando defeitos quando são menos custosos para corrigir.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Princípio DevOps correto. Testes unitários no desenvolvimento, não só no final. Custo de correção aumenta exponencialmente com o tempo. TDD exemplifica shift-left.

**Questão 68** (CEBRASPE/TCU - Auditor de TI)
Rollback automático em pipelines CI/CD sempre deve reverter para a versão imediatamente anterior quando métricas de erro excedem thresholds definidos.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" problemático. Rollback automático é uma opção, não obrigatório. Pode reverter para qualquer versão estável conhecida, não necessariamente a imediata anterior.

**Questão 69** (CEBRASPE/TCU - Auditor de TI)
Semantic Versioning (SemVer) usa o formato MAJOR.MINOR.PATCH, onde MAJOR indica breaking changes, MINOR adiciona funcionalidade retrocompatível, e PATCH corrige bugs.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição exata de SemVer. v2.1.3: 2=major (breaking), 1=minor (features), 3=patch (fixes). Fundamental para gestão de dependências.

**Questão 70** (CEBRASPE/TCU - Auditor de TI)
Configuration drift ocorre quando configurações de servidores em produção divergem gradualmente das definições originais devido a mudanças manuais não documentadas.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Problema real que IaC resolve. Servidores "snowflake" únicos. Immutable infrastructure e IaC previnem drift. Puppet, Chef, Ansible detectam e corrigem.

**Questão 71** (CEBRASPE/TCU - Auditor de TI)
DevOps elimina completamente a necessidade de profissionais especializados em operações, já que desenvolvedores assumem todas as responsabilidades.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Mal-entendido comum. DevOps = colaboração Dev+Ops, não eliminação de Ops. "You build it, you run it" não significa devs fazem tudo. SRE é evolução de Ops.

**Questão 72** (CEBRASPE/TCU - Auditor de TI)
SonarQube é uma ferramenta de análise estática de código que pode ser integrada em pipelines CI/CD para verificar quality gates antes de permitir merge.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Ferramenta cobrada em 2024-2025. SAST, code smells, coverage, duplicação, vulnerabilidades. Quality gates bloqueiam merge se métricas falham. Integra com Jenkins, GitLab.

**Questão 73** (CEBRASPE/TCU - Auditor de TI)
Trunk-based development requer que todos os desenvolvedores trabalhem diretamente na branch principal, proibindo completamente o uso de feature branches.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Proibindo completamente" exagerado. Trunk-based permite short-lived feature branches (<1 dia). Foco: integração frequente, evitar long-lived branches. Google, Facebook usam.

**Questão 74** (CEBRASPE/TCU - Auditor de TI)
Chaos Engineering consiste em injetar falhas controladas em produção para descobrir fraquezas antes que se tornem outages.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Princípio Netflix correto. Chaos Monkey, Gremlin. Testa resiliência proativamente. "Fail fast, fail safe". Game days simulam falhas. Confiança através de stress testing.

**Questão 75** (CEBRASPE/TCU - Auditor de TI)
Continuous Monitoring em DevOps foca exclusivamente em métricas técnicas de infraestrutura, ignorando métricas de negócio.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Exclusivamente" errado. DevOps monitora: infra (CPU, memory), aplicação (latency, errors), negócio (conversão, revenue). Business metrics validam valor entregue.

**Questão 76** (CEBRASPE/TCU - Auditor de TI)
Value Stream Mapping em DevOps identifica desperdícios e gargalos no fluxo desde a ideia até a entrega de valor ao cliente.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Técnica Lean correta. Mapeia todo fluxo, identifica wait times, handoffs, retrabalho. Métrica chave: lead time vs process time. Foco em flow efficiency.

**Questão 77** (CEBRASPE/TCU - Auditor de TI)
Imutable infrastructure significa que servidores nunca são atualizados após deployment; mudanças requerem substituição completa por nova versão.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Princípio correto. No patching/updating em produção. Nova versão = novo deployment. Containers/VMs descartáveis. Phoenix servers vs snowflakes. Elimina drift.

**Questão 78** (CEBRASPE/TCU - Auditor de TI)
Site Reliability Engineering (SRE) aplica práticas de engenharia de software para operações, definindo error budgets e SLOs.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Google SRE correto. Error budget = tolerância de falha. SLO = Service Level Objective. SLI = indicadores. Balance entre velocidade e confiabilidade.

**Questão 79** (CEBRASPE/TCU - Auditor de TI)
Blameless postmortems em cultura DevOps focam em identificar e punir responsáveis por incidentes para prevenir recorrências.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Punir" contradiz "blameless". Foco: aprender com falhas, não culpar pessoas. Sistemas falham, não pessoas. Psychological safety essencial. Just culture.

**Questão 80** (CEBRASPE/TCU - Auditor de TI)
DORA metrics (Deployment Frequency, Lead Time, MTTR, Change Failure Rate) são indicadores-chave de performance em DevOps.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Métricas fundamentais corretas. Elite performers: deploy múltiplas/dia, lead time <1h, MTTR <1h, failure rate <15%. State of DevOps Report referência.

---

## BLOCO 4: APIs RESTful E SEGURANÇA (20 QUESTÕES)
*[Tópico de alta incidência: 80% de chance de aparecer na prova]*

**Questão 81** (CEBRASPE/TCU - Auditor de TI)
APIs RESTful devem sempre retornar dados em formato JSON, sendo proibido o uso de XML ou outros formatos.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre/proibido" incorreto. REST permite múltiplos formatos: JSON (mais comum), XML, YAML, até HTML. Content negotiation via Accept header.

**Questão 82** (CEBRASPE/TCU - Auditor de TI)
OAuth 2.0 é um protocolo de autorização, não de autenticação, delegando acesso a recursos sem compartilhar credenciais.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Distinção crucial. OAuth = autorização (access tokens). OpenID Connect adiciona autenticação sobre OAuth. "OAuth is not authentication" - pegadinha frequente.

**Questão 83** (CEBRASPE/TCU - Auditor de TI)
JWT (JSON Web Token) é sempre criptografado para garantir a segurança das informações transmitidas.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Pegadinha comum. JWT pode ser: JWS (signed, não encrypted), JWE (encrypted). Maioria usa JWS - dados em base64, visíveis mas não alteráveis.

**Questão 84** (CEBRASPE/TCU - Auditor de TI)
O método HTTP PUT deve ser idempotente, produzindo o mesmo resultado independentemente de quantas vezes for executado.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Propriedade REST correta. PUT, DELETE, GET = idempotentes. POST = não idempotente. PUT atualiza recurso completo, PATCH atualização parcial.

**Questão 85** (CEBRASPE/TCU - Auditor de TI)
CORS (Cross-Origin Resource Sharing) é um mecanismo que permite que recursos de uma página web sejam solicitados de outro domínio.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição correta. Headers: Access-Control-Allow-Origin, Methods, Headers. Preflight requests com OPTIONS. Segurança browser-side, não API-side.

**Questão 86** (CEBRASPE/TCU - Auditor de TI)
Rate limiting em APIs REST deve sempre ser implementado retornando erro 404 Not Found quando o limite for excedido.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Status code errado. Rate limiting usa 429 Too Many Requests. Headers: X-RateLimit-Limit, X-RateLimit-Remaining, Retry-After. 404 esconderia o recurso.

**Questão 87** (CEBRASPE/TCU - Auditor de TI)
OpenID Connect é uma camada de identidade construída sobre OAuth 2.0, fornecendo autenticação através de ID tokens.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Relação correta. OIDC = OAuth + autenticação. ID token (JWT) com claims do usuário. Access token para recursos. Google, Facebook login usam OIDC.

**Questão 88** (CEBRASPE/TCU - Auditor de TI)
API Gateway sempre deve implementar toda a lógica de negócio para melhorar a performance das APIs.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Anti-pattern repetido. API Gateway = thin layer: routing, auth, rate limit, caching. Business logic nos microserviços. Fat gateway = acoplamento e gargalo.

**Questão 89** (CEBRASPE/TCU - Auditor de TI)
HATEOAS (Hypermedia as the Engine of Application State) em REST permite que clientes naveguem pela API através de links fornecidos nas respostas.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** REST maturity level 3. Respostas incluem links para ações possíveis. Cliente não precisa conhecer URLs hardcoded. Self-documenting API.

**Questão 90** (CEBRASPE/TCU - Auditor de TI)
Bearer tokens em autorização HTTP devem sempre ser enviados como query parameters na URL para facilitar o debugging.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Péssima prática de segurança. Bearer tokens vão no header: Authorization: Bearer <token>. Query params ficam em logs, history, referer. Security vulnerability.

**Questão 91** (CEBRASPE/TCU - Auditor de TI)
GraphQL é sempre superior a REST APIs, devendo substituir completamente REST em todas as aplicações modernas.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre/completamente" falso. GraphQL: bom para queries complexas, múltiplas recursos. REST: simpler, melhor caching, mais maduro. Trade-offs, não substituição total.

**Questão 92** (CEBRASPE/TCU - Auditor de TI)
API versioning pode ser implementado através de URLs (/v1/users), headers (Accept: application/vnd.api+json;version=1), ou query parameters (?version=1).

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Três estratégias válidas. URL mais comum/simples. Headers mais RESTful. Query params menos comum. Backward compatibility essencial em qualquer estratégia.

**Questão 93** (CEBRASPE/TCU - Auditor de TI)
Refresh tokens em OAuth 2.0 sempre têm vida útil menor que access tokens para aumentar a segurança.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão conceitual. Refresh tokens vivem MAIS que access tokens. Access: minutos/horas. Refresh: dias/meses. Refresh obtém novo access sem reautenticação.

**Questão 94** (CEBRASPE/TCU - Auditor de TI)
Webhooks são uma forma de APIs push-based onde o servidor notifica clientes sobre eventos, invertendo o modelo tradicional de polling.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição correta. Server push vs client pull. Webhook = HTTP callback. Evita polling desnecessário. GitHub, Stripe, Slack usam extensivamente.

**Questão 95** (CEBRASPE/TCU - Auditor de TI)
OWASP API Security Top 10 inclui vulnerabilidades específicas de APIs como Broken Object Level Authorization e Excessive Data Exposure.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Referência importante 2023+. API1:2023 BOLA (IDOR), API2:2023 Broken Authentication, API3:2023 Excessive Data Exposure. Diferente do web top 10.

**Questão 96** (CEBRASPE/TCU - Auditor de TI)
Stateless authentication significa que o servidor não mantém nenhuma informação de sessão, com toda informação necessária incluída em cada request.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Princípio REST correto. JWT exemplifica: token contém claims, servidor não guarda sessão. Escala horizontalmente. Trade-off: token size vs server state.

**Questão 97** (CEBRASPE/TCU - Auditor de TI)
API throttling e rate limiting são conceitos idênticos, referindo-se apenas à limitação de requisições por período de tempo.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Conceitos relacionados mas diferentes. Rate limiting = hard limit (429 error). Throttling = slow down/queue requests. Throttling mais suave que blocking.

**Questão 98** (CEBRASPE/TCU - Auditor de TI)
mTLS (mutual TLS) requer que tanto cliente quanto servidor apresentem certificados, fornecendo autenticação bidirecional.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Segurança avançada correta. TLS normal: só server tem certificado. mTLS: ambos têm. Zero trust networks, service mesh (Istio) usam mTLS.

**Questão 99** (CEBRASPE/TCU - Auditor de TI)
Content Security Policy (CSP) headers em APIs REST previnem completamente ataques de SQL injection.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Conceito errado. CSP previne XSS em browsers, não SQL injection. SQL injection: prepared statements, input validation, least privilege. CSP é client-side.

**Questão 100** (CEBRASPE/TCU - Auditor de TI)
API composition pattern em microserviços agrega dados de múltiplos serviços em uma única resposta, podendo ser implementado no API Gateway ou em um serviço dedicado.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Padrão correto. BFF também faz composition. Trade-off: simplicidade cliente vs complexidade/latência servidor. Evitar cascading failures importante.

---

## BLOCO 5: SCRUM E METODOLOGIAS ÁGEIS (25 QUESTÕES)
*[Tópico de máxima incidência: 95% de chance de aparecer na prova]*

**Questão 101** (CEBRASPE/TCU - Auditor de TI)
No Scrum, o Product Owner é responsável por definir como o trabalho será realizado durante a Sprint, determinando a arquitetura técnica e as ferramentas a serem utilizadas.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão de papéis clássica. PO define O QUE (Product Backlog, prioridades). Developers definem COMO (técnica, arquitetura). Autogerenciamento do time de desenvolvimento.

**Questão 102** (CEBRASPE/TCU - Auditor de TI)
Sprint Planning para uma Sprint de um mês tem timebox máximo de 8 horas, sendo proporcionalmente menor para Sprints mais curtas.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Timebox correto e proporcionalidade. Sprint 1 mês = 8h planning. Sprint 2 semanas = 4h. Planning define Sprint Goal e seleciona items do Product Backlog.

**Questão 103** (CEBRASPE/TCU - Auditor de TI)
Daily Scrum deve sempre ser realizada em pé, pela manhã, com duração de exatamente 15 minutos, seguindo o formato das três perguntas.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" e detalhes prescritivos errados. 15 minutos correto, mas: pode ser sentado, qualquer hora, qualquer formato que funcione. Scrum 2020 removeu 3 perguntas obrigatórias.

**Questão 104** (CEBRASPE/TCU - Auditor de TI)
Sprint Review tem timebox de 4 horas para Sprint de um mês e foca em inspecionar o Incremento e adaptar o Product Backlog.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Timebox e propósito corretos. Review ≠ demo apenas. Colaboração com stakeholders, discussão do que foi feito, adaptação do backlog baseada em feedback.

**Questão 105** (CEBRASPE/TCU - Auditor de TI)
Sprint Retrospective para Sprint de um mês tem timebox máximo de 4 horas, focando em melhorar o processo e a colaboração do time.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Pegadinha de timebox. Retrospective = 3 HORAS para Sprint 1 mês, não 4. Review = 4h, Retrospective = 3h. CEBRASPE adora trocar esses números.

**Questão 106** (CEBRASPE/TCU - Auditor de TI)
Scrum Master é o gerente do projeto, responsável por atribuir tarefas aos desenvolvedores e reportar status para a alta gestão.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Misconception clássica. Scrum Master é servant-leader, facilitador, coach. Remove impedimentos, não gerencia pessoas. Time auto-organizado, sem gerente tradicional.

**Questão 107** (CEBRASPE/TCU - Auditor de TI)
Definition of Done é um acordo compartilhado que descreve quando um item do Product Backlog está completo e pronto para release.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conceito fundamental correto. DoD = checklist de qualidade. Aplicável a todos items. Pode evoluir. Diferente de acceptance criteria (específico por item).

**Questão 108** (CEBRASPE/TCU - Auditor de TI)
Velocity em Scrum é um compromisso obrigatório do time sobre quantos pontos serão entregues em cada Sprint.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Compromisso obrigatório" errado. Velocity é métrica histórica para previsibilidade, não commitment. Sprint Goal é compromisso, não pontos específicos.

**Questão 109** (CEBRASPE/TCU - Auditor de TI)
Product Backlog Refinement consome no máximo 10% da capacidade dos Developers durante a Sprint.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Guideline correto (não regra rígida). Refinement = ongoing activity. Detalhar items futuros, estimar, dividir stories grandes. Evita Sprints começarem despreparadas.

**Questão 110** (CEBRASPE/TCU - Auditor de TI)
Scrum proíbe completamente mudanças no Sprint Backlog após o início da Sprint, garantindo estabilidade completa do escopo.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Proíbe completamente" falso. Sprint Backlog PODE mudar durante Sprint (developers adicionam/removem tarefas). Sprint GOAL não muda. Scope pode ser renegociado com PO.

**Questão 111** (CEBRASPE/TCU - Auditor de TI)
Empirismo no Scrum baseia-se em três pilares: transparência, inspeção e adaptação.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Fundamento teórico correto. Transparência (visibilidade), Inspeção (artefatos/progresso), Adaptação (ajustes baseados em inspeção). Base do controle de processo empírico.

**Questão 112** (CEBRASPE/TCU - Auditor de TI)
Scrum Teams devem ter exatamente 7 pessoas, incluindo Product Owner, Scrum Master e 5 Developers.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Exatamente" errado. Scrum Guide 2020: 10 ou menos pessoas total, geralmente 3-9. Número exato não prescrito. Small enough to be nimble, large enough to complete work.

**Questão 113** (CEBRASPE/TCU - Auditor de TI)
Sprint Cancellation pode ser feita apenas pelo Product Owner quando o Sprint Goal se torna obsoleto.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Autoridade correta. Só PO cancela Sprint. Raro, traumático. Motivo: Sprint Goal obsoleto (mudança mercado, prioridades). Items "Done" são revisados, resto volta ao backlog.

**Questão 114** (CEBRASPE/TCU - Auditor de TI)
Scrum events são obrigatórios e não podem ser cancelados, mesmo que o time considere desnecessários.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Muito prescritivo. Scrum events são fortemente recomendados, mas Scrum é framework, não metodologia. Times experientes podem adaptar, embora arriscado pular eventos.

**Questão 115** (CEBRASPE/TCU - Auditor de TI)
Technical debt deve ser invisível ao Product Owner, sendo gerenciada exclusivamente pelos Developers sem impacto no Product Backlog.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Invisível" problemático. Technical debt DEVE ser transparente ao PO. Pode virar items no backlog. PO prioriza com entendimento do impacto business vs técnico.

**Questão 116** (CEBRASPE/TCU - Auditor de TI)
Extreme Programming (XP) complementa Scrum com práticas de engenharia como pair programming, TDD e integração contínua.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Combinação comum correta. Scrum = framework gerencial. XP = práticas técnicas. Juntos cobrem gestão + engenharia. Muitos times usam Scrum com práticas XP.

**Questão 117** (CEBRASPE/TCU - Auditor de TI)
SAFe (Scaled Agile Framework) é uma abordagem para escalar Scrum em grandes organizações, mantendo exatamente as mesmas práticas do Scrum.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Exatamente as mesmas" falso. SAFe adiciona camadas, papéis (RTE, Product Management), eventos (PI Planning), conceitos (ART, value streams). Mais prescritivo que Scrum puro.

**Questão 118** (CEBRASPE/TCU - Auditor de TI)
Kanban pode ser usado com Scrum através do Scrumban, limitando WIP e visualizando fluxo enquanto mantém Sprints.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Híbrido válido. Scrumban: Sprints + WIP limits + pull system. Útil para manutenção, suporte. Mais flexível que Scrum puro, mais estruturado que Kanban puro.

**Questão 119** (CEBRASPE/TCU - Auditor de TI)
Story Points devem sempre representar horas de trabalho, facilitando o cálculo de prazo e custo do projeto.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Conceito errado comum. Story Points = complexidade/esforço/risco RELATIVO, não tempo absoluto. Fibonacci/t-shirt sizes. Evita falácia da precisão em estimativas.

**Questão 120** (CEBRASPE/TCU - Auditor de TI)
Manifesto Ágil valoriza indivíduos e interações mais que processos e ferramentas, mas não elimina completamente a necessidade destes últimos.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Interpretação correta. "Mais que" não significa "ao invés de". Processos/ferramentas têm valor, mas pessoas/interações têm MAIS valor. Balance, não extremismo.

**Questão 121** (CEBRASPE/TCU - Auditor de TI)
Working software é a única medida de progresso em metodologias ágeis, ignorando completamente documentação e processos.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Única" e "ignorando completamente" exagerados. Working software é medida PRIMÁRIA, não única. Documentação necessária é valorizada. "Just enough" documentation.

**Questão 122** (CEBRASPE/TCU - Auditor de TI)
User stories devem sempre seguir o formato "Como [persona], eu quero [ação] para [benefício]", sendo inválidas em outros formatos.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre/inválidas" prescritivo demais. Formato comum e útil, mas não obrigatório. Job stories, feature descriptions também válidas. Formato serve à comunicação, não vice-versa.

**Questão 123** (CEBRASPE/TCU - Auditor de TI)
INVEST criteria para user stories significa: Independent, Negotiable, Valuable, Estimable, Small, Testable.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Acrônimo correto. Good stories: Independentes (sem dependências), Negociáveis (não contratos), Valiosas (para usuário), Estimáveis, Pequenas (fit in sprint), Testáveis.

**Questão 124** (CEBRASPE/TCU - Auditor de TI)
Spike é uma user story técnica time-boxed usada para pesquisa ou proof of concept quando há incerteza significativa.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conceito XP correto. Spike = investigação para reduzir risco/incerteza. Timeboxed, sem entregável funcional. Output: conhecimento para estimar/implementar stories futuras.

**Questão 125** (CEBRASPE/TCU - Auditor de TI)
Agile Release Train (ART) em SAFe sincroniza múltiplos times Scrum em cadência comum com Program Increment (PI) de 8-12 semanas.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** SAFe correto. ART = 50-125 pessoas, 5-12 times. PI = 4-6 sprints. PI Planning = 2 dias, todos times juntos. Synchronization over autonomy em escala.

---

## BLOCO 6: DEVSECOPS E SEGURANÇA (15 QUESTÕES)
*[Tópico emergente de alta importância: 70% de chance de aparecer]*

**Questão 126** (CEBRASPE/TCU - Auditor de TI)
DevSecOps significa adicionar uma fase de segurança ao final do pipeline de CI/CD, após os testes funcionais.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Conceito completamente errado. DevSecOps = "shift-left security", segurança DESDE O INÍCIO, não no final. Security as Code, automação em todas as fases.

**Questão 127** (CEBRASPE/TCU - Auditor de TI)
SAST (Static Application Security Testing) analisa código-fonte sem executá-lo, identificando vulnerabilidades durante desenvolvimento.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Definição correta. SAST = white-box, análise estática. Encontra: SQL injection, XSS, buffer overflow no código. SonarQube, Checkmarx, Fortify são ferramentas.

**Questão 128** (CEBRASPE/TCU - Auditor de TI)
DAST (Dynamic Application Security Testing) requer código-fonte para análise, simulando ataques em aplicações paradas.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão SAST/DAST. DAST = black-box, NÃO precisa código, testa aplicação RUNNING. Simula ataques reais. OWASP ZAP, Burp Suite exemplos.

**Questão 129** (CEBRASPE/TCU - Auditor de TI)
OWASP Top 10 é atualizado periodicamente e inclui vulnerabilidades como Injection, Broken Authentication, e Security Misconfiguration.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Referência fundamental correta. Atualizado cada 3-4 anos. 2021 incluiu: A01-Broken Access Control, A02-Cryptographic Failures, A03-Injection. Must-know para DevSecOps.

**Questão 130** (CEBRASPE/TCU - Auditor de TI)
Dependency scanning em DevSecOps sempre deve bloquear o pipeline se encontrar qualquer vulnerabilidade, independentemente da severidade.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre/qualquer" problemático. Política de threshold: block em CRITICAL/HIGH, warn em MEDIUM/LOW. Balance segurança vs velocidade. OWASP Dependency-Check, Snyk tools.

**Questão 131** (CEBRASPE/TCU - Auditor de TI)
Security Champions são desenvolvedores com interesse em segurança que atuam como ponte entre times de desenvolvimento e segurança.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Modelo organizacional correto. Security Champions: embedded no time dev, treinamento extra security, promovem práticas seguras. Escala cultura de segurança.

**Questão 132** (CEBRASPE/TCU - Auditor de TI)
Container scanning deve verificar apenas vulnerabilidades no código da aplicação, ignorando a base image e dependências.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Apenas/ignorando" errado. Container scanning verifica TUDO: base image, OS packages, app dependencies, configurations. Trivy, Clair, Anchore fazem scan completo.

**Questão 133** (CEBRASPE/TCU - Auditor de TI)
Infrastructure as Code scanning valida templates Terraform/CloudFormation contra políticas de segurança antes do deployment.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Policy as Code correto. Ferramentas: Checkov, TFSec, Open Policy Agent. Detecta: portas abertas, encryption disabled, excessive permissions. Shift-left para infra.

**Questão 134** (CEBRASPE/TCU - Auditor de TI)
Secret management em DevSecOps permite hardcoding de senhas no código desde que o repositório seja privado.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Péssima prática. NUNCA hardcode secrets, mesmo em repo privado. Use: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault. Secrets como variáveis ambiente runtime.

**Questão 135** (CEBRASPE/TCU - Auditor de TI)
RASP (Runtime Application Self-Protection) protege aplicações em runtime, detectando e bloqueando ataques em tempo real.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Tecnologia emergente correta. RASP embarcado na app, monitora execução, bloqueia exploits real-time. Complementa WAF. Contrast Security, Sqreen exemplos.

**Questão 136** (CEBRASPE/TCU - Auditor de TI)
Security by Design significa que considerações de segurança devem ser incorporadas desde a fase de design, não apenas na implementação.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Princípio fundamental correto. Threat modeling, security requirements, abuse cases desde início. Mais barato/efetivo que fixing later. STRIDE, DREAD metodologias.

**Questão 137** (CEBRASPE/TCU - Auditor de TI)
Compliance as Code automatiza verificação de conformidade regulatória, integrando checks de compliance no pipeline CI/CD.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Tendência DevSecOps correta. Automatiza: GDPR, PCI-DSS, HIPAA checks. InSpec, Cloud Custodian ferramentas. Continuous compliance vs periodic audits.

**Questão 138** (CEBRASPE/TCU - Auditor de TI)
Zero Trust Architecture em DevSecOps significa confiar completamente em componentes internos após autenticação inicial.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão do conceito. Zero Trust = "never trust, always verify". Sem perímetro confiável. Microsegmentação, least privilege, continuous verification. Google BeyondCorp exemplo.

**Questão 139** (CEBRASPE/TCU - Auditor de TI)
SBOM (Software Bill of Materials) documenta todos componentes e dependências de uma aplicação para gestão de vulnerabilidades.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Conceito importante pós-SolarWinds. SBOM = inventário completo componentes. Formatos: SPDX, CycloneDX. Executive Order 14028 (US) requer SBOM.

**Questão 140** (CEBRASPE/TCU - Auditor de TI)
DevSecOps elimina completamente a necessidade de pentesting manual, já que toda segurança é automatizada no pipeline.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Elimina completamente" falso. DevSecOps automatiza muito, mas pentesting manual ainda necessário para: lógica complexa, chained exploits, criatividade humana. Complementares, não substitutos.

---

## BLOCO 7: TÓPICOS COMPLEMENTARES (10 QUESTÕES)
*[Padrões GoF, NoSQL, Serverless, Mensageria - 20% das questões]*

**Questão 141** (CEBRASPE/TCU - Auditor de TI)
O padrão Singleton garante que uma classe tenha sempre múltiplas instâncias para melhorar a performance através de paralelismo.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Inversão completa. Singleton garante ÚNICA instância global. Anti-pattern em muitos casos: dificulta testes, acopla código. Use dependency injection preferencialmente.

**Questão 142** (CEBRASPE/TCU - Auditor de TI)
Bancos NoSQL sacrificam consistência forte em favor de disponibilidade e tolerância a partição, seguindo o teorema CAP.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Trade-off CAP correto. NoSQL geralmente escolhe AP (Available, Partition-tolerant) sobre C (Consistency). Eventually consistent. Cassandra, DynamoDB exemplos.

**Questão 143** (CEBRASPE/TCU - Auditor de TI)
O padrão Observer define uma dependência um-para-muitos onde mudanças em um objeto notificam automaticamente seus dependentes.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Padrão GoF correto. Publisher-Subscriber. Loose coupling. Base para event-driven, MVC, reactive programming. JavaScript events, Java listeners usam Observer.

**Questão 144** (CEBRASPE/TCU - Auditor de TI)
MongoDB é um banco de dados NoSQL orientado a colunas, otimizado para consultas analíticas em grande escala.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Categoria errada. MongoDB = document store (JSON/BSON). Column-family = Cassandra, HBase. MongoDB para OLTP flexível, não OLAP analítico.

**Questão 145** (CEBRASPE/TCU - Auditor de TI)
Factory Pattern sempre requer uma classe abstrata Factory, não podendo ser implementado com métodos estáticos simples.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" falso. Simple Factory usa static methods. Factory Method e Abstract Factory são variações mais complexas. Escolha depende da necessidade de flexibilidade.

**Questão 146** (CEBRASPE/TCU - Auditor de TI)
Serverless computing cobra por tempo de execução e recursos consumidos, não por servidores provisionados constantemente.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Modelo econômico correto. Pay-per-execution: milliseconds + memory. Zero custo idle. AWS Lambda: charged per 100ms increment. Cost-effective para workloads variáveis.

**Questão 147** (CEBRASPE/TCU - Auditor de TI)
Apache Kafka é um message broker tradicional que garante ordem global de mensagens em todo o cluster.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Conceitos errados. Kafka = distributed log/stream platform, não broker tradicional. Ordem POR PARTIÇÃO, não global. Partitions parallelizam, sacrificando ordem global.

**Questão 148** (CEBRASPE/TCU - Auditor de TI)
SOLID principles incluem Single Responsibility, onde cada classe deve ter apenas uma razão para mudar.

**Gabarito:** CERTO
**Comentário (Foco 80/20):** Primeiro princípio SOLID correto. SRP reduz acoplamento, facilita manutenção. Uma classe = uma responsabilidade. Coesão alta, acoplamento baixo.

**Questão 149** (CEBRASPE/TCU - Auditor de TI)
ElasticSearch é um banco NoSQL do tipo chave-valor, otimizado para cache de sessão em memória.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** Categoria errada. ElasticSearch = search engine (Lucene-based), document store secundário. Full-text search, log analytics. Redis = key-value cache. Não confundir.

**Questão 150** (CEBRASPE/TCU - Auditor de TI)
Test-Driven Development sempre resulta em código mais rápido e com melhor performance que desenvolvimento tradicional.

**Gabarito:** ERRADO
**Comentário (Foco 80/20):** "Sempre" e foco errado. TDD melhora DESIGN e MANUTENIBILIDADE, não necessariamente performance. Red-green-refactor. Trade-off: tempo inicial vs qualidade/manutenção longo prazo.

---

## RESUMO ESTRATÉGICO FINAL

### Distribuição das 150 Questões (Princípio 80/20 Aplicado):
- **120 questões (80%)** nos tópicos de máxima incidência
- **30 questões (20%)** em tópicos complementares

### Padrões de Pegadinhas Mais Explorados:
1. Termos absolutos (sempre, nunca, todos, jamais) - 45% das questões erradas
2. Inversão de conceitos similares - 25% das questões  
3. Detalhes técnicos alterados - 20% das questões
4. Papéis/responsabilidades trocados - 10% das questões

### Tópicos com Maior ROI para Estudo:
1. **Kubernetes** (comandos, objetos, arquitetura) - 10% da prova
2. **Microserviços vs Monolitos** (trade-offs) - 10% da prova
3. **Docker** (conceitos, comandos) - 8% da prova
4. **Scrum** (papéis, eventos, timeboxes exatos) - 15% da prova
5. **DevOps/CI/CD** (conceitos, ferramentas) - 10% da prova

### Dicas Finais para a Prova:
- Desconfie de termos absolutos (90% são erradas)
- Memorize timeboxes do Scrum (pegadinha garantida)
- Kubernetes aparecerá extensivamente (estude comandos)
- DevSecOps é tendência crescente (shift-left security)
- Trade-offs > soluções absolutas (CEBRASPE adora nuances)

**Sucesso = Conhecimento Profundo dos Top 20% + Domínio das Pegadinhas + Gestão de Risco nas Respostas**
