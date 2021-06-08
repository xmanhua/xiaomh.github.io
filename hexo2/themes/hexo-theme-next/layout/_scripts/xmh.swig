{%
  set xmh_scripts = [
    'src/xmh.js'
  ]
%}

{% for bs in xmh_scripts %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ bs }}?v={{ version }}"></script>
{% endfor %}
