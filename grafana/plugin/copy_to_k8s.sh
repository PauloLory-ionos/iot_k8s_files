export KUBECONFIG=/mnt/c/dev/digital-ecosystem-kube/kubeconfigiot.yaml
export KUBERNETES_NAMESPACE=digitaltwin-iot

kubectl cp ./dist/. $KUBERNETES_NAMESPACE/grafana-5d6c675496-75lls:/var/lib/grafana/plugins/