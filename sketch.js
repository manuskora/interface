let c
let weight
let brush
let l
let o1
let o2
let p1
let p2
let q1
let q2
let r1
let r2
let f
let s

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')
    print("setup")
    background(240,220,180)
    weight=2
    c=color(0,0,0)
    brush = "normal"
}

  function mouseClicked() {

      print(int(mouseX), int(mouseY))

      if(mouseX>0&&mouseX<30&&mouseY>0&&mouseY<30){

        c=color(0,0,0)
      }
        if(mouseX>30&&mouseX<60&&mouseY>0&&mouseY<30){

        c=color(255,0,0)

        }
        if(mouseX>60&&mouseX<90&&mouseY>0&&mouseY<30){

          c=color(128,255,0)
        }
          if(mouseX>90&&mouseX<120&&mouseY>0&&mouseY<30){

            c=color(0,255,255)
          }
            if(mouseX>120&&mouseX<150&&mouseY>0&&mouseY<30){

              c=color(128,0,255)
            }
            if(mouseX>150&&mouseX<200&&mouseY>0&&mouseY<20){
              brush="normal"
            }
            if(mouseX>200&&mouseX<250&&mouseY>0&&mouseY<30){

              brush="skin"
            }
            if(mouseX>250&&mouseX<300&&mouseY>0&&mouseY<30){

              brush="eyes"
            }
            if(mouseX>300&&mouseX<350&&mouseY>0&&mouseY<30){

              brush="hair"

            }
            if(mouseX>350&&mouseX<400&&mouseY>0&&mouseY<30){

              brush="fur"

            }
            if(mouseX>400&&mouseX<450&&mouseY>0&&mouseY<30){

              brush="feather"

            }
            if(mouseX>450&&mouseX<500&&mouseY>0&&mouseY<30){

              brush="scales"

            }
            if(brush=="lips"){
              l=0
            }

            if(brush=="veins"){
            o1= mouseX+random(-20,20)
            o2= mouseY+random(-20,20)
            p1= mouseX+random(-20,20)
            p2= mouseY+random(-20,20)
            q1= mouseX+random(-20,20)
            q2= mouseY+random(-20,20)
            }

  }

function draw() {

  if (mouseIsPressed){
    if(mouseY>30){
    frameRate(30)

    if(brush=="normal"){
      stroke(c)
      strokeWeight(weight)
      line(mouseX,mouseY,pmouseX,pmouseY)
      }
    if(brush=="crazy"){
      ellipseMode(CENTER)
      noStroke()
      fill(red(c)+random(-100,100),green(c)+random(-100,100),blue(c)+random(-100,100))
      circle(mouseX+random(-10,10),mouseY+random(-10,10),random(1,50))
      }
      if(brush=="crazy2"){
        noStroke()
        fill(red(c)+random(-100,100),green(c)+random(-100,100),blue(c)+random(-100,100),50)
        triangle(mouseX,mouseY,mouseX+random(-30,30),mouseY+random(-30,30),mouseX+random(-30,30),mouseY+random(-30,30))
        }
        if(brush=="hair"){
          noFill()
          strokeWeight(2)
          stroke(red(c)+random(-100,100),green(c)+random(-100,100),blue(c)+random(-100,100),100)
          bezier(mouseX,mouseY,mouseX+random(-100,100),mouseY+random(-100,100),mouseX+random(-100,100),mouseY+random(-100,100),mouseX+random(-100,100),mouseY+random(-100,100))
          }
          if(brush=="eyes"){
            frameRate(10)

            //whites
            noStroke()
            fill(255)
            strokeWeight(3)
            beginShape()
            curveVertex(mouseX,mouseY-10)
            curveVertex(mouseX-20,mouseY)
            curveVertex(mouseX,mouseY+10)
            curveVertex(mouseX+20,mouseY)
            curveVertex(mouseX,mouseY-10)
            curveVertex(mouseX-20,mouseY)
            curveVertex(mouseX,mouseY+10)
            endShape()

            //veins
            noFill()
            strokeWeight(1)
            stroke(155,0,0)
            beginShape()
            let v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            v=random(20,-20)
            curveVertex(mouseX+v, mouseY+random(-10*pow(v/20,2),10*pow(v/20,2)))
            endShape()

            //irises
            angleMode(DEGREES)
            for(let i=0;i<360;i++){
            strokeWeight(1)
            stroke(red(c)+random(-200,200),green(c)+random(-200,200),blue(c)+random(-200,200),100)
            line(mouseX,mouseY,mouseX+10*sin(i),mouseY+10*cos(i))
            }

            //pupils
            fill(0)
            ellipseMode(CENTER)
            circle(mouseX,mouseY,10)

            //outline
            stroke(0)
            noFill()
            strokeWeight(2)
            beginShape()
            curveVertex(mouseX,mouseY-10)
            curveVertex(mouseX-20,mouseY)
            curveVertex(mouseX,mouseY+10)
            curveVertex(mouseX+20,mouseY)
            curveVertex(mouseX,mouseY-10)
            curveVertex(mouseX-20,mouseY)
            curveVertex(mouseX,mouseY+10)
            endShape()
            stroke(0,0,0,255)
            strokeWeight(1)
            for(let i=0;i<11;i++){
            line(mouseX+20-4*i,mouseY-10+10*pow(((i-5)/5),2),mouseX+20-4*i-(i-5),mouseY-20+10*pow(((i-5)/5),2))
            }
          }

          if(brush=="nose"){
            noStroke()
            fill(0,0,0,30)
            ellipseMode(CORNERS)
            ellipse(mouseX-20,mouseY-5,mouseX,mouseY+10)
            ellipse(mouseX+20,mouseY-5,mouseX,mouseY+10)
            fill(red(c),green(c),blue(c),200)
            stroke(0,0,0,10)
            strokeWeight(3)
            beginShape()
            curveVertex(mouseX-10,mouseY-30)
            curveVertex(mouseX-10,mouseY-30)
            curveVertex(mouseX-10,mouseY-10)
            curveVertex(mouseX-20,mouseY-10)
            curveVertex(mouseX-20,mouseY)
            curveVertex(mouseX-10,mouseY)
            curveVertex(mouseX,mouseY+10)
            curveVertex(mouseX+10,mouseY)
            curveVertex(mouseX+20,mouseY)
            curveVertex(mouseX+20,mouseY-10)
            curveVertex(mouseX+10,mouseY-10)
            curveVertex(mouseX+10,mouseY-30)
            curveVertex(mouseX+10,mouseY-30)
            endShape()
          }

          if (brush=="lips"){
            frameRate(300)
            stroke(c)
            angleMode(DEGREES)
            l+=pow(pow(movedX,2)+pow(movedY,2),.5)
            strokeWeight(10+5*sin(l*10-90))
            line(mouseX,mouseY,pmouseX,pmouseY)
          }

        if(brush=="paintbrush"){
          frameRate(10)
            strokeWeight(1)
            stroke(red(c),green(c),blue(c),100)
            angleMode(DEGREES)
            let angle=atan((mouseY-pmouseY)/(mouseX-pmouseX))
            let perp=angle-90
            for(let i=-25;i<26;i++){
          stroke(red(c)+random(-50,50),green(c)+random(-50,50),blue(c)+random(-50,50),255-10*abs(i))
          if(pmouseX<mouseX){
            line(mouseX+i*cos(perp),mouseY+i*sin(perp),pmouseX+i*cos(perp),pmouseY+i*sin(perp))
          }
          else if(pmouseX>mouseX){
            line(mouseX-i*cos(perp),mouseY-i*sin(perp),pmouseX-i*cos(perp),pmouseY-i*sin(perp))
          }
          else{
            if(pmouseY<mouseY){
              line(mouseX+i,mouseY,pmouseX+i,mouseY)
              }
            else if(pmouseY>mouseY){
              line(mouseX-i,mouseY,pmouseX-i,mouseY)
              }
            }
          }//endforloop
        }

        if (brush=="face"){
          fill(c)
          noStroke()
          beginShape()
          curveVertex(mouseX-100,mouseY-100)
          curveVertex(mouseX+100,mouseY-100)
          curveVertex(mouseX+100,mouseY+150)
          curveVertex(mouseX,mouseY+200)
          curveVertex(mouseX-100,mouseY+150)
          curveVertex(mouseX-100,mouseY-100)
          curveVertex(mouseX+100,mouseY-100)
          curveVertex(mouseX+100,mouseY+150)
          endShape()

      }

      if (brush=="scales"){
        frameRate(30)
        fill(red(c),green(c),blue(c),150)
        stroke(0)
        strokeWeight(1)
        let a=random(-10,10)
        let b=random(-10,10)
        beginShape()
        vertex(mouseX+a+8, mouseY+b-8)
        vertex(mouseX+a+8, mouseY+b+8)
        vertex(mouseX+a, mouseY+b+10)
        vertex(mouseX+a-8, mouseY+b+8)
        vertex(mouseX+a-8, mouseY+b-8)
        endShape()
        noStroke()
        fill(255,255,255,100)
        beginShape()
        vertex(mouseX+a+4, mouseY+b-4)
        vertex(mouseX+a+4, mouseY+b+4)
        vertex(mouseX+a, mouseY+b+6)
        vertex(mouseX+a-4, mouseY+b+4)
        vertex(mouseX+a-4, mouseY+b-4)
        endShape()
        beginShape()
        vertex(mouseX+a+6, mouseY+b-6)
        vertex(mouseX+a+6, mouseY+b+6)
        vertex(mouseX+a, mouseY+b+8)
        vertex(mouseX+a-6, mouseY+b+6)
        vertex(mouseX+a-6, mouseY+b-6)
        endShape()
      }


      if (brush=="feather"){
        push()
        angleMode(DEGREES)
        f=(random(-40,40))
        translate(mouseX-mouseX*cos(f)+mouseY*sin(f),mouseY-mouseY*cos(f)-mouseX*sin(f))
        rotate(f)
        stroke(0,0,0,70)
        strokeWeight(1)
        line(mouseX,mouseY,mouseX,mouseY+50)
        stroke(red(c),green(c),blue(c),70)
        for(i=0;i<10;i++){
        line(mouseX,mouseY+10+(4*i),mouseX+10-i,mouseY+50-.3*pow(10-i,2))
        }
        for(i=0;i<10;i++){
        line(mouseX,mouseY+10+(4*i),mouseX-10+i,mouseY+50-.3*pow(10-i,2))
        }
        pop()
      }

      if (brush=="veins"){
        strokeWeight(3)
        push()
        frameRate(5)
        pop()
        noFill()
        stroke(red(c),green(c),blue(c),255)
        let r1 = mouseX+random(-20,20)
        let r2 = mouseY+random(-20,20)
        beginShape()
        curveVertex(o1,o2)
        curveVertex(p1,p2)
        curveVertex(q1,q2)
        curveVertex(r1,r2)
        endShape()
        s=random(1,100)
        if (s<50){
        stroke(red(c),green(c),blue(c),150)
        beginShape()
        curveVertex(o1,o2)
        curveVertex(p1,p2)
        curveVertex(mouseX+random(-20,20),mouseY+random(-20,20))
        curveVertex(mouseX+random(-20,20),mouseY+random(-20,20))
        curveVertex(mouseX+random(-20,20),mouseY+random(-20,20))
        curveVertex(mouseX+random(-20,20),mouseY+random(-20,20))
        endShape()
        }
        o1 = p1
        o2 = p2
        p1 = q1
        p2 = q2
        q1 = r1
        q2 = r2

    }

    if (brush=="fur"){
      push()
      frameRate(30)
      angleMode(DEGREES)
      f=(random(-20,20))
      translate(mouseX-mouseX*cos(f)+mouseY*sin(f),mouseY-mouseY*cos(f)-mouseX*sin(f))
      rotate(f)
      stroke(red(c),green(c),blue(c),60+random(-30,30))
      strokeWeight(1)
      noFill()
      let j=mouseX+random(-10,10)
      let k=mouseY+random(-10,10)-30
      curve(j+random(-100,100),k,j,k,j,k+60,j+random(-100,100),k+60)
      pop()

    }

    if (brush=="skin"){

      noStroke()
      fill(red(c),green(c),blue(c),30)
      circle(mouseX,mouseY,50)
      s=random(0,100)

      if(s<20){
      fill(red(c)/2,green(c)/2,blue(c)/2)
      circle(mouseX+random(-20,20),mouseY+random(-20,20),5)
      }
      else if(s<40){
      fill(red(c)/2+128,green(c)/2+128,blue(c)/2+128,50)
      circle(mouseX+random(-20,20),mouseY+random(-20,20),10)
      }
      else if(s<50){
      fill(red(c)+200,green(c),blue(c),255)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
      circle(mouseX+random(-5,5),mouseY+random(-5,5),2)
    }

  }
  }









  }



noStroke()
rectMode(CORNER)
//colors
fill(0,0,0)
rect(0,0,30,30)
fill(255,0,0)
rect(30,0,30,30)
fill(128,255,0)
rect(60,0,30,30)
fill(0,255,255)
rect(90,0,30,30)
fill(128,0,255)
rect(120,0,30,30)
//
fill(255)
stroke(0)
rect(150,0,50,20)

rect(200,0,50,20)

rect(250,0,50,20)

rect(300,0,50,20)

rect(350,0,50,20)
rect(400,0,50,20)
rect(450,0,50,20)
fill(0)
noStroke()
text("Normal",153,15)
text("Skin",203,15)
text("Eyes",253,15)
text("Hair",303,15)
text("Fur",353,15)
text("Feathers",402,15)
text("Scales",453,15)

}



function keyPressed() {

    print(key)
    if(key=="ArrowUp"){
      weight++
    }

    if(key=="ArrowDown"){
      if(weight>1){
        weight--
      }
    }

      if (key=="o"){
        c=color(255,128,0)
      }



}
