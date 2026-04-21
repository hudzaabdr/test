<script>
function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      alert("Kamera berhasil diakses!");
    })
    .catch(function(err) {
      alert("Kamera ditolak atau tidak tersedia");
    });
}
</script>
