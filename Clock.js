var cx, cy;
var SecondRadius;
var MinuteRadius;
var HourRadius;
var ClockDiameter;

function setup() {
    createCanvas(windowWidth - 40, windowHeight - 50);
    stroke(255);

    var radius = min(width, height) / 2;
    SecondRadius = radius * 0.71;
    MinuteRadius = radius * 0.60;
    HourRadius = radius * 0.50;
    ClockDiameter = radius * 1.7;

    cx = width / 2;
    cy = height / 2;
}

function draw() {
    // draw the clock
    noStroke();
    fill(0, 255, 204);
    ellipse(cx, cy, ClockDiameter + 25, ClockDiameter + 25);
    fill(100, 100, 100);
    ellipse(cx, cy, ClockDiameter, ClockDiameter);

    var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    // draw the hands
    stroke(255);
    strokeWeight(1);
    line(cx, cy, cx + cos(s) * SecondRadius, cy + sin(s) * MinuteRadius);
    strokeWeight(2);
    line(cx, cy, cx + cos(m) * MinuteRadius, cy + sin(m) * MinuteRadius);
    strokeWeight(4);
    line(cx, cy, cx + cos(h) * HourRadius, cy + sin(h) * HourRadius);

    // Draw the minute ticks
    strokeWeight(2);
    beginShape(POINTS);
    for (var a = 0; a < 360; a += 6) {
        var angle = radians(a);
        var x = cx + cos(angle) * SecondRadius;
        var y = cy + sin(angle) * SecondRadius;
        vertex(x, y);
    }
    endShape();
}