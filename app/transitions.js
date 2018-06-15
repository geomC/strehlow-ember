export default function(){
    this.transition(
      this.fromRoute(() => true),
      this.toRoute(() => true),
      this.use('crossFade'),
      this.reverse('crossFade')
    );
}
