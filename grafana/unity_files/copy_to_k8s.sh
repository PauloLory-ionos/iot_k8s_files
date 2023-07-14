export KUBECONFIG=/mnt/c/dev/digital-ecosystem-kube/kubeconfigiot.yaml
export KUBERNETES_NAMESPACE=digitaltwin-iot


kubectl exec -n  $KUBERNETES_NAMESPACE -it grafana-5d6c675496-75lls -c grafana -- mkdir /usr/share/grafana/public/unitybuild/
kubectl exec -n  $KUBERNETES_NAMESPACE  -it grafana-5d6c675496-75lls -c grafana -- mkdir /usr/share/grafana/public/unitybuild/robotArm
kubectl cp . $KUBERNETES_NAMESPACE/grafana-5d6c675496-75lls:/usr/share/grafana/public/unitybuild/robotArm/